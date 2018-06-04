import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FileUpload from '@material-ui/icons/FileUpload';

const styles = theme => ({
  card: {
    minWidth: 450,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
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
      uploadInput: ''
    }
  }

  uploadFile(ev) {
    this.props.handleUpload(ev, this.state.uploadInput);
  }

  onFileInputChange(event) {
    if (event.target.files[0]) {
      this.setState({
        fileName: event.target.files[0].name,
        uploadInput: event.target.files[0]
      })
    }
  }
  
  render() {
    const { classes } = this.props;
  
  
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant="headline"
              color="inherit"
              component="h2">
              Upload Your Source File
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
            </label>
  
          </CardContent>
          <CardActions style={{ justifyContent: "flex-end" }}>
            <Button
              size="small"
              className={classes.submit}
              onClick={this.uploadFile.bind(this)}
              disabled={this.state.fileName === ''}
            >Generate Batch File</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

FileUploadCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(FileUploadCard);