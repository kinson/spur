import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BuckarooAppBar from './components/AppBar';
import FileUploadCard from './components/FileUploadCard';
import BatchFileDisplayCard from './components/BatchFileDisplayCard';
import PartitionsCard from './components/PartitionsCard';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';

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
      uploadFile: '',
      isError: false,
      partitions: [],
      snackBarOpenSuccess: false,
      snackBarOpenError: false
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev, uploadInput) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', uploadInput);
    

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.text().then((body) => {
        let newState = { isError: false, snackBarOpenSuccess: true };
        if (response.status !== 202) {
          newState = { 
            isError: true, 
            snackBarOpenError: true,
            errorMessage: body
          }
        }
        this.setState({ 
          ...newState, 
          sbatchText: body
        });
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
    fetch('http://localhost:3000/api/partitions', {
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
              <PartitionsCard partitions={this.state.partitions}/>
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
            message={<span id="message-id">File uploaded</span>}
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
