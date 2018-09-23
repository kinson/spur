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
    The results displayed here contain the contents of the output from running the job.<br /> <br />

    To find more information about how to replicate this process using the command line or to find the source code for this website visit the <a href="https://github.com/kinson/spur">Github page</a>.
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

class ResultsCard extends Component {

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
      visibility: this.props.resultsText === '' ? 'hidden' : 'visible',
    }
  
    return (
      <div style={rootStyles}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant="headline"
              color="inherit"
              component="h2">
              Results From Test Run
            </Typography>

        <SyntaxHighlighter customStyle={{textAlign: 'left' }} showLineNumbers={true} language='bash' style={railscasts}>{this.props.resultsText}</SyntaxHighlighter>
        
          </CardContent>
          <CardActions style={{ justifyContent: "flex-end" }}>
            <Button
              style={{ marginRight: 'auto' }}
              size="small"
              onClick={this.openHelpDialog.bind(this)}
              className={classes.submit}
            ><HelpIcon /></Button>
          </CardActions>
        </Card>
      <HelpDialog
	open={this.state.open}
        onClose={this.handleClose}
        cardtitle="Job Results"
      >
        {helpSrc()}
      </HelpDialog>
      </div>
    )
  }
}

ResultsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ResultsCard);
