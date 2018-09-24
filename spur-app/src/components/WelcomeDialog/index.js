import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
});

class WelcomeDialog extends Component {
  render() {
    const { classes } = this.props;
  
  
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="headline" component="h2">
            Welcome to SPUR!
          </Typography>
          
          <Typography component="p" color="textSecondary">
            Get up and running with ManeFrame II in minutes
          </Typography>
        </Paper>
      </div>
    )
  }
}

WelcomeDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(WelcomeDialog);
