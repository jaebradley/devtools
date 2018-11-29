import React from 'react';

import {
  withStyles,
} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const Clipboard = ({ classes, notes }) => (
  <div className={classes.root}>
    <List>
      {
        notes.map(note => (
          <ListItem button>
            <ListItemText primary={note.value} />
          </ListItem>
        ))
      }
    </List>
  </div>
);

export default withStyles(styles)(Clipboard);
