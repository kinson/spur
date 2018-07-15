import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  dialogBody: {
    paddingLeft: '40px',
    paddingRight: '40px'
  },
  dialogHeader: {
    paddingLeft: '40px'
  }
});

class HelpDialog extends Component {
  handleClose = () => {
    this.props.onClose();
  }

  
  render() {

    const { classes, onClose, selectedValue, cardtitle, children, ...other } = this.props;
  
    return (
      <Dialog onClose={this.handleClose.bind(this)} aria-labelledby="simple-dialog-title" {...other}>
	<DialogTitle className={classes.dialogHeader} id="simple-dialog-title">{cardtitle}</DialogTitle>
          <div className={classes.dialogBody}>
            {children}
          </div>
	<DialogActions>
	  <Button onClick={this.handleClose} color="primary" autoFocus>
	    Close
	  </Button>
	</DialogActions>
      </Dialog>
    )
  }
}

HelpDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(HelpDialog);
