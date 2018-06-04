import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';

import Avatar from '@material-ui/core/Avatar';

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


function generate(partitions) {
  return partitions.map(value =>
    React.cloneElement(
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DeveloperBoardIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={value.name}
          secondary={`${value.nodesAvailable} nodes available`} 
        />
        <ListItemSecondaryAction>
          <Button variant="contained" color="secondary">
            Select Partition
          </Button>
        </ListItemSecondaryAction>
      </ListItem>, {
        key: value.name,
    }),
  );
}

class PartitionsCard extends Component {
  
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

          <List>
            {generate(
              this.props.partitions
            )}

          </List>        
        
          
          </CardContent>
          <CardActions style={{ justifyContent: "flex-end" }}>
            <Button
              size="small"
              className={classes.submit}
            >Run On Open Node</Button>
          </CardActions>
        </Card>
        
      </div>
    )
  }
}

PartitionsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(PartitionsCard);