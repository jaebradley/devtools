import React from 'react';
import PropTypes from 'prop-types';

import {
  withStyles,
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SwapVerticalCircle from '@material-ui/icons/SwapVerticalCircle';
import EncodingInput from './EncodingInput';
import EncodingOutput from './EncodingOutput';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const Encoding = ({ classes }) => (
  <Paper
    className={classes.root}
    elevation={1}
  >
    <EncodingInput />
    <SwapVerticalCircle />
    <EncodingOutput />
  </Paper>
);

Encoding.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Encoding);
