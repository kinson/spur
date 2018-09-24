import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import HelpIcon from '@material-ui/icons/Help';
import HelpDialog from '../HelpDialog';

const helpSrc = () => {
  return (<Typography variant="body1">
    The partitions on this card represent the different types of supercomputer nodes that are available at the moment to run your job on. There are additional node types not listed that have no available nodes currently. The technical specifications and time constraints for each partition can be found <a href="http://faculty.smu.edu/csc/documentation/slurm.html#maneframe-ii-s-slurm-partitions-queues">here</a>.
  </Typography>);
}

const styles = theme => ({
  card: {
    minWidth: 450,
  },
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
  }
});


function generate(partitions, selectPartition, selectedPartition) {
  const style = (name) => {
    if (selectedPartition && selectedPartition === name) {
      return 'contained'
    }
    return 'outlined';
  }

  return partitions.map(value =>
    React.cloneElement(
      <TableRow hover>
        <TableCell component="th" scope="row">
          {value.name}
        </TableCell>
        <TableCell numeric style={{textAlign: 'left'}}> {value.nodesAvailable} </TableCell>
        <TableCell> {value.description || 'N/A'} </TableCell>
        <TableCell style={{textAlign: 'right'}}>
          <Button variant={style(value.name)} color="secondary" onClick={selectPartition.bind(this, value.name)}>
            Select Partition
          </Button>
        </TableCell>
      </TableRow>, {
        key: value.name,
    }),
  );
}

class PartitionsCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedPartition: null,
      open: false,
      runningTest: false,
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

  selectPartition(name) {
    this.setState({ selectedPartition: name });
  }

  runTestJob() {
    this.setState({ runningTest: true });
    this.props.runTestJob(this.state.selectedPartition);
  }
  
  render() {
    const { classes } = this.props;

    const componentVisible = {
      visibility: this.props.partitions.length !== 0 ? 'visible': 'hidden'
    }

    return (
      <div style={componentVisible}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant="headline"
              color="inherit"
              component="h2">
              Available Partitions
            </Typography>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell> Partition Name </TableCell>
                <TableCell> Nodes Available </TableCell>
                <TableCell> Description </TableCell>
                <TableCell style={{textAlign: 'right'}}> Select Partition </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
	      {generate(
		this.props.partitions,
		this.selectPartition.bind(this),
		this.state.selectedPartition,
	      )}
            </TableBody>
          </Table>        
        
          
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
              disabled={this.state.selectedPartition == null || this.state.runningTest}
              onClick={this.runTestJob.bind(this)}
            >Run On Open Node</Button>
          </CardActions>
        </Card>
      <HelpDialog
	open={this.state.open}
        onClose={this.handleClose}
        cardtitle="Partitions Available"
      >
        {helpSrc()}
      </HelpDialog>
      </div>
    )
  }
}

PartitionsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(PartitionsCard);
