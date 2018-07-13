import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FileUpload from '@material-ui/icons/FileUpload';
import TextField from '@material-ui/core/TextField';
import HelpIcon from '@material-ui/icons/Help';
import HelpDialog from '../HelpDialog';

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
        cardtitle="File Upload Card"
      >
        This is the one for me
      </HelpDialog>
      </div>
    )
  }
}

FileUploadCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(FileUploadCard);
