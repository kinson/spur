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
import styled, { keyframes } from 'styled-components'


const fadeIn = keyframes`
from {
  opacity: 0
}

to {
  opacity: 1
}
`;

const rotate360 = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${props => props.spin ? rotate360: 'none'} 2s linear infinite;
`;

const styles = theme => ({
  bigBlueBox: {
    backgroundColor: '#03a9f4',
    height: '200px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  progressStepOne: {
    height: '70px',
    width: '70px',
    borderRadius: '35px',
    backgroundColor: '#ff5722',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    height: '55px'
  },
  stepWrapper: {
    opacity: 0,
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

    const submittedAnimation = {
      animation: `${fadeIn} 0.5s linear`,
      opacity: 1,
    }

    const processingAnimation = {
      animation: this.props.beganProcessing ? `${fadeIn} 0.5s linear` : 'none',
      opacity: this.props.beganProcessing ? 1: 0,
    }

    const doneAnimation = {
      animation: this.props.isComplete ? `${fadeIn} 0.5s linear` : 'none',
      opacity: this.props.isComplete ? 1: 0,
    }
  
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>

            <div className={classes.bigBlueBox}>
              <div className={classes.stepWrapper} style={submittedAnimation}>
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

              <div className={classes.stepWrapper} style={processingAnimation}>
                <Rotate spin={true}>
                  <div className={classes.progressStepOne} >
                    <CachedIcon className={classes.icon} />
                  </div>
                </Rotate>

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
        </Card>
        
      </div>
    )
  }
}

ProgressTracker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ProgressTracker);