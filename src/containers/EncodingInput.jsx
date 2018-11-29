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
  handleInputChange,
  updateEncodingStartType,
} from '../actions';
import EncodingInputComponent from '../components/EncodingInput';

const styles = {
  root: {
    display: 'flex',
  },
  input: {
    marginLeft: '24px',
  },
};

const mapStateToProps = state => ({
  startType: getEncodedValue(state).startType,
});

const mapDispatchToProps = dispatch => ({
  onStartTypeChange: e => dispatch(updateEncodingStartType(e.target.value)),
  onInputChange: e => dispatch(handleInputChange(e.target.value)),
});

const EncodingInput = withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps,
)(EncodingInputComponent));

export default EncodingInput;
