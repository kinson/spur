import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import HelpIcon from '@material-ui/icons/Help';
import HelpDialog from '../HelpDialog';

const helpSrc = () => {
  return (<Typography variant="body1">
    When you upload your source file a batch file is generated that can be used to submit your code as a job to the high performance computer.<br /><br />
    
    A batch file is a bash script that contains special comments that describe how the super computer should run your program. For example it specifies what the name of your job is, how much memory it needs and what type of node it should run on. Don’t worry if you upload your file, or the <a href='https://gist.github.com/kinson/1d31567d27af3be4bc70898a351baaca'>sample file</a> a submission file will be generated for you. <br /><br />
    
    The Center for Scientific Computation has more information about batch files <a href='http://faculty.smu.edu/csc/documentation/slurm.html#batch-job-submission-file'>here</a>.
  </Typography>);
}

const styles = theme => ({
  card: {
    minWidth: 450,
  },
  title: {
    marginBottom: 20,
  },
  pos: {
    marginBottom: 12,
  },
  input: {
    display: 'none'
  },
  button: {
    margin: theme.spacing.unit,
  },
  submit: {
    color: theme.palette.secondary.dark
  }
});

class FileUploadCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileName: '',
      uploadInput: '',
      secret: '',
      open: false
    }
  }

  uploadFile(ev) {
    this.props.handleUpload(ev, this.state.uploadInput, this.state.fileName, this.state.secret);
  }

  onFileInputChange(event) {
    if (event.target.files[0]) {
      this.setState({
        fileName: event.target.files[0].name,
        uploadInput: event.target.files[0]
      })
    }
  }

  onSecretChange(event) {
    this.setState({
      secret: event.target.value
    });
  }

  openHelpDialog() {
    this.setState({
      open: true
    });
  }

  handleClose = value => {
    this.setState({ open: false });
  };

  
  render() {
    const { classes } = this.props;
  
  
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant="headline"
              color="inherit"
              className={classes.title}
              component="h2">
              Upload Your Source File
            </Typography>

            <Typography
              color="textSecondary"
              className={classes.pos}
              component="p"
            >
              Upload a C or C++ file that has at least one OpenMP Pragma
            </Typography>
  
            <input
              onChange={this.onFileInputChange.bind(this)}
              className={classes.input}
              id="flat-button-file"
              multiple
              type="file"
            />
            <label htmlFor="flat-button-file">
              <Button component="span" variant="contained" className={classes.button} color="secondary">
                Select A File
              </Button>
            </label><br />

            <TextField
              id="name"
              label="Secret"
              className={classes.textField}
              value={this.state.secret}
              onChange={this.onSecretChange.bind(this)}
              margin="normal"
            />
  
          </CardContent>
          <CardActions style={{ justifyContent: "flex-end" }}>
            <Button
              style={{ marginRight: 'auto' }}
              size="small"
              onClick={this.openHelpDialog.bind(this)}
              className={classes.submit}
            ><HelpIcon /></Button>
            <Button
              size="small"
              className={classes.submit}
              onClick={this.uploadFile.bind(this)}
              disabled={this.state.fileName === ''}
            >Generate Batch File</Button>
          </CardActions>
        </Card>
      <HelpDialog
	open={this.state.open}
        onClose={this.handleClose}
        cardtitle="Generating A Batch File"
      >
        {helpSrc()}
      </HelpDialog>
      </div>
    )
  }
}

FileUploadCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(FileUploadCard);
