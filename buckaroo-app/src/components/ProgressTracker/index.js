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

const gradientFade = keyframes`
0% {
  background: linear-gradient(to right, #ff5722 0%, white 0%);
}

5% {
  background: linear-gradient(to right, #ff5722 5%, white 5%);
}

10% {
  background: linear-gradient(to right, #ff5722 10%, white 10%);
}

15% {
  background: linear-gradient(to right, #ff5722 15%, white 15%);
}

20% {
  background: linear-gradient(to right, #ff5722 20%, white 20%);
}

25% {
  background: linear-gradient(to right, #ff5722 25%, white 25%);
}

30% {
  background: linear-gradient(to right, #ff5722 30%, white 30%);
}

35% {
  background: linear-gradient(to right, #ff5722 35%, white 35%);
}

40% {
  background: linear-gradient(to right, #ff5722 40%, white 40%);
}

45% {
  background: linear-gradient(to right, #ff5722 45%, white 45%);
}

50% {
  background: linear-gradient(to right, #ff5722 50%, white 50%);
}

55% {
  background: linear-gradient(to right, #ff5722 55%, white 55%);
}

60% {
  background: linear-gradient(to right, #ff5722 60%, white 60%);
}

65% {
  background: linear-gradient(to right, #ff5722 65%, white 65%);
}

70% {
  background: linear-gradient(to right, #ff5722 70%, white 70%);
}

75% {
  background: linear-gradient(to right, #ff5722 75%, white 75%);
}

80% {
  background: linear-gradient(to right, #ff5722 80%, white 80%);
}

85% {
  background: linear-gradient(to right, #ff5722 85%, white 85%);
}

90% {
  background: linear-gradient(to right, #ff5722 90%, white 90%);
}

95% {
  background: linear-gradient(to right, #ff5722 95%, white 95%);
}

100% {
  background: linear-gradient(to right, #ff5722 100%, white 100%);
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
animation: ${rotate360} 2s linear infinite;
padding: 2rem 1rem;
font-size: 1.2rem;
`;

const styles = theme => ({
  bigBlueBox: {
    backgroundColor: '#03a9f4',
    // background: 'linear-gradient(to bottom, #03a9f4 0%, #03a9f4 45%, #fff 45%, #fff 50%, #03a9f4 50%)',
    height: '200px',
    // width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  progressStepOne: {
    animation: `${gradientFade} 0.9s linear`,
    height: '70px',
    width: '70px',
    borderRadius: '35px',
    backgroundColor: '#ff5722',
    // boxShadow: '2px 2px #c41c00 inset',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: '10px'
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
                <Rotate>
                  <div className={classes.progressStepOne}>
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