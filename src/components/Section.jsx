import React, {
  Component,
} from 'react';
import {
  withStyles,
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const Section = ({ classes, onInputChange, displayValue }) => (
  <Paper className={classes.root} elevation={1}>
    <Input onChange={e => { console.log(e.target.value); onInputChange(e.target.value); } } />

    <Typography component="p">
      { displayValue }
    </Typography>
  </Paper>
);

export default withStyles(styles)(Section);
