
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  title: {
    margin: '10px'
  }
});

class HelpDialog extends Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    this.props.onClose();
  }

  
  render() {

    const { classes, onClose, selectedValue, cardtitle, children, ...other } = this.props;
  
    return (
      <Dialog onClose={this.handleClose.bind(this)} aria-labelledby="simple-dialog-title" {...other}>
	<DialogTitle id="simple-dialog-title">{cardtitle}</DialogTitle>
	  <div>
           {children}
	  </div>
	<DialogActions>
	  <Button onClick={this.handleClose} color="primary" autoFocus>
	    Agree
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
