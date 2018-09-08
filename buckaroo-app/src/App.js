import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BuckarooAppBar from './components/AppBar';
import WelcomeDialog from './components/WelcomeDialog';
import FileUploadCard from './components/FileUploadCard';
import BatchFileDisplayCard from './components/BatchFileDisplayCard';
import ResultsCard from './components/ResultsCard';
import PartitionsCard from './components/PartitionsCard';
import ProgressTracker from './components/ProgressTracker';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Nes from 'nes';
const config = require('./config');
const client = new Nes.Client(config.wsHost);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff8a50',
      main: '#ff5722',
      dark: '#c41c00',
      contrastText: '#fafafa',
    },
    secondary: {
      light: '#67daff',
      main: '#03a9f4',
      dark: '#007ac1',
      contrastText: '#fafafa',
    },
  },
});

const styles = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: red[600],
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sbatchText: '',
      uploadFileName: '',
      isError: false,
      partitions: [],
      snackBarOpenSuccess: false,
      snackBarOpenError: false,
      sbatchPath: '',
      tooLongToRun: null,
      // progress specific code
      progressSubmitted: false,
      progressComplete: false,
      progressBegan: false,
      progressProcessing: false,
      resultsText: ''
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUpdate(update, flags) {
    console.log('in websocket');
    console.log(update);
    if (update && update.status === 'BEGAN') {
      this.setState({ 
        progressBegan: true,
        progressProcessing: true
      });

    } else if (update && update.status === 'ENDED') {
      this.setState({ 
        progressComplete: true,
        progressProcessing: false
      })
    }
  }

  clientConnected() {
    console.log('client has connected');
  }

  async componentDidMount() {
    client.onConnect = this.clientConnected;
    await client.connect();
    client.onUpdate = this.handleUpdate.bind(this);
  }

  handleUploadImage(ev, uploadInput, fileName, secret) {
    ev.preventDefault();

    this.setState({
      uploadFileName: fileName
    });

    const data = new FormData();
    data.append('file', uploadInput);
    data.append('fileName', fileName);
    data.append('secret', secret);

    fetch(`${config.host}/upload`, {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        let newState = { isError: false, snackBarOpenSuccess: true };
        if (response.status !== 202) {
          newState = { 
            isError: true, 
            snackBarOpenError: true,
            errorMessage: body.message
          }
        } else {
          newState = {
            ...newState,
            successMessage: 'File Uploaded',
            sbatchText: body.sbatch,
            sbatchPath: body.fpath,
            tooLongToRun: body.tooLongToRun
          }
        }
        this.setState(newState);
      });
    });
   }

   handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ snackBarOpenError: false, snackBarOpenSuccess: false });
  };

  fetchAvailablePartitions() {
    fetch(`${config.host}/api/partitions`, {
      method: 'POST'
    }).then((response) => {
      response.json().then(body => {
        const nodes = Object.keys(body);
        if (!nodes || nodes.length === 0) {
          this.setState({
            snackBarOpenError: true,
            errorMessage: 'No available partitions'
          })
        }
        return nodes.map(key => {
          return { name: key, nodesAvailable: body[key] };
        });
      }).then(partitions => this.setState({ partitions }));
    })
    .catch(err => {
      this.setState({
        snackBarOpenError: true,
        errorMessage: 'Unable to fetch available partitions'
      })
    });
  }

  runTestJob(partition) {
    const data = {
      filePath: this.state.sbatchPath,
      partition,
      fileName: this.state.uploadFileName
    };

    fetch(`${config.host}/api/run`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => {
      response.json().then(body => {
        let newState = { 
          isError: false, 
          snackBarOpenSuccess: true, 
          successMessage: 'Job submitted to ManeFrame II',
          progressSubmitted: true
        };
        if (response.status !== 200) {
          newState = {
            isError: true,
            snackBarOpenError: true,
            errorMessage: body.message
          }
        }
        this.setState(newState);

        if (response.status === 200) {
          client.subscribe(`/job/${body.jobId}`, this.handleUpdate.bind(this));
        }
      });
    });
  }

  fetchRunResults() {
    fetch(`${config.host}/api/fetch-output?filePath=${this.state.sbatchPath}`)
      .then((response) => {
        response.text().then(output => {
          let newState = {};
	  if (response.status !== 200) {
	    newState = {
	      isError: true,
	      snackBarOpenError: true,
	      errorMessage: output.message
	    };
	  } else {
	    newState = {
	      isError: false,
	      resultsText: output
	    };
	  }
	  this.setState(newState);
	});
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme} >
        <div className="App">
          <BuckarooAppBar />
          <Grid 
            container
            spacing={24}
            justify="center"
            direction="row"
            style={{"marginTop": "10px"}}
          >

            <Grid item xs={12} md={10} lg={8}>
              <WelcomeDialog />
            </Grid>

            <Grid item xs={12} md={10} lg={8}>
              <FileUploadCard handleUpload={this.handleUploadImage.bind(this)}/>
            </Grid>

            <Grid item xs={12} md={10} lg={8}>
              <BatchFileDisplayCard 
                batchText={this.state.sbatchText} 
                isError={this.state.isError}
                fetchAvailablePartitions={this.fetchAvailablePartitions.bind(this)}
              />
            </Grid>

            <Grid item xs={12} md={10} lg={8}>
              <PartitionsCard 
                partitions={this.state.partitions}
                runTestJob={this.runTestJob.bind(this)}
              />
            </Grid>

            <Grid item xs={12} md={10} lg={8}>
              <ProgressTracker
                isSubmitted={this.state.progressSubmitted} 
                isComplete={this.state.progressComplete}
                beganProcessing={this.state.progressBegan}
                isProcessing={this.state.progressProcessing}
                fetchRunResults={this.fetchRunResults.bind(this)}
                />
            </Grid>

            <Grid item xs={12} md={10} lg={8}>
                <ResultsCard 
                  resultsText={this.state.resultsText} 
                />
            </Grid>
          </Grid>


        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={this.state.snackBarOpenSuccess}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
        >
          <SnackbarContent
            className={classes.success}
            message={this.state.successMessage}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={this.handleClose.bind(this)}
              >
                <CloseIcon className={classes.icon} />
              </IconButton>,
            ]}
          />
        </Snackbar>

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={this.state.snackBarOpenError}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <SnackbarContent
            className={classes.error}
            message={this.state.errorMessage}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={this.handleClose.bind(this)}
              >
                <CloseIcon className={classes.icon} />
              </IconButton>,
            ]}
          />
        </Snackbar>
          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, {withThemes: true})(App);
