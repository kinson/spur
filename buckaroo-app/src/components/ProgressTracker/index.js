import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import CachedIcon from '@material-ui/icons/Cached';
import DoneIcon from '@material-ui/icons/Done';

const styles = theme => ({
  bigBlueBox: {
    backgroundColor: '#03a9f4',
    height: '200px',
    // width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  progressStepOne: {
    height: '70px',
    width: '70px',
    borderRadius: '35px',
    backgroundColor: '#ff5722',
    boxShadow: '0px 2px #c41c00 inset',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px'
  },
  icon: {
    color: '#fff',
    height: '55px'
  },
  stepWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  stepTitle: {
    color: '#fff'
  }
});

class ProgressTracker extends Component {
  
  render() {
    const { classes } = this.props;

    // const rootStyles = {
    //   visibility: this.props.batchText === '' ? 'hidden' : 'visible',
    // }
  
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            {/* <Typography
              variant="headline"
              color="inherit"
              component="h2">
              Generated Batch File
            </Typography> */}

            <div className={classes.bigBlueBox}>
              <div className={classes.stepWrapper}>
                <div className={classes.progressStepOne}>
                  <SendIcon className={classes.icon}/>
                </div>

                <Typography
                  variant="subheading"
                  className={classes.stepTitle}
                  component="h4">
                  Submitted
                </Typography>
              </div>

              <div className={classes.stepWrapper}>
                <div className={classes.progressStepOne} style={{'WebkitAnimation': 'spin 4s infinite linear'}}>
                  <CachedIcon className={classes.icon} />
                </div>

                <Typography
                  variant="subheading"
                  className={classes.stepTitle}
                  component="h4">
                  Processing
                </Typography>
              </div>

              <div className={classes.stepWrapper}>
                <div className={classes.progressStepOne}>
                  <DoneIcon className={classes.icon}/>
                </div>

                <Typography
                  variant="subheading"
                  className={classes.stepTitle}
                  component="h4">
                  Completed
                </Typography>
              </div>
            </div>
  
          </CardContent>
          {/* <CardActions style={{ justifyContent: "flex-end" }}>
            <Button
              size="small"
              className={classes.submit}
              onClick={this.props.fetchAvailablePartitions.bind(this)}
            >View Available Partitions</Button>
          </CardActions> */}
        </Card>
        
      </div>
    )
  }
}

ProgressTracker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ProgressTracker);