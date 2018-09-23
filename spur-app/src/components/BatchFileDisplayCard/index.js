import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/styles/hljs';
import HelpIcon from '@material-ui/icons/Help';
import HelpDialog from '../HelpDialog';

const helpSrc = () => {
  return (<Typography variant="body1">
   The sample batch file displayed on this car contains the necessary configuration to submit a job to the SLURM job scheduler on the supercomputer. <br /><br />

    The first part of this file contains SLURM flags to determine how to run the job, these are prefixed with #SBATCH. The second part of the file contains Bash commands to load the correct compiler and then compile your program. The last step is beginning the execution of the program.
  </Typography>);
}

const styles = theme => ({
  fileName: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    margin: theme.spacing.unit,
  },
  submit: {
    color: theme.palette.secondary.dark
  },
  textField: {
    width: '100%',
    backgroundColor: '#222',
    paddingLeft: '10px'
  },
  textFieldInput: {
    color: 'white'
  }
});

class BatchFileDisplayCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
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

    const rootStyles = {
      visibility: this.props.batchText === '' ? 'hidden' : 'visible',
    }
  
    return (
      <div style={rootStyles}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant="headline"
              color="inherit"
              component="h2">
              Generated Batch File
            </Typography>

           <Typography className={classes.fileName} color="textSecondary">
            sample.sbatch
          </Typography>

        <SyntaxHighlighter customStyle={{textAlign: 'left' }} showLineNumbers={true} language='bash' style={railscasts}>{this.props.batchText}</SyntaxHighlighter>
        
          
  
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
              onClick={this.props.fetchAvailablePartitions.bind(this)}
            >View Available Partitions</Button>
          </CardActions>
        </Card>
      <HelpDialog
	open={this.state.open}
        onClose={this.handleClose}
        cardtitle="Sample Batch File"
      >
        {helpSrc()}
      </HelpDialog>
      </div>
    )
  }
}

BatchFileDisplayCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(BatchFileDisplayCard);
