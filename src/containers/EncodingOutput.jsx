import React from 'react';
import {
  connect,
} from 'react-redux';
import {
  withStyles,
} from '@material-ui/core/styles';

import {
  getEncodedValue,
} from '../selectors';
import {
  updateEncodingEndType,
} from '../actions';
import EncodingOutputComponent from '../components/EncodingOutput';

const styles = {
  root: {
    display: 'flex',
  },
  output: {
    marginLeft: '24px',
  },
};

const mapStateToProps = state => ({
  endType: getEncodedValue(state).endType,
  endValue: getEncodedValue(state).endValue,
});

const mapDispatchToProps = dispatch => ({
  onEndTypeChange: e => dispatch(updateEncodingEndType(e.target.value)),
});

const EncodingInput = withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps,
)(EncodingOutputComponent));

export default EncodingInput;
