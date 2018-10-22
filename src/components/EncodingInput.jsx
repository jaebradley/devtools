import React from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';

import {
  ENCODING_TYPE,
} from '../constants';

const ENCODING_TYPE_DISPLAY_VALUE = Object.freeze({
  [ENCODING_TYPE.TEXT]: 'Text',
  [ENCODING_TYPE.BASE_64]: 'Base 64',
});

const EncodingInput = ({
  classes,
  startType,
  onStartTypeChange,
  onInputChange,
}) => (
  <div className={classes.root}>
    <Select
      native
      value={startType}
      onChange={onStartTypeChange}
    >
      <option value={ENCODING_TYPE.TEXT}>
        { ENCODING_TYPE_DISPLAY_VALUE[ENCODING_TYPE.TEXT] }
      </option>
      <option value={ENCODING_TYPE.BASE_64}>
        { ENCODING_TYPE_DISPLAY_VALUE[ENCODING_TYPE.BASE_64] }
      </option>
    </Select>
    <Input
      className={classes.input}
      onChange={onInputChange}
      multiline
      placeholder="Input a value to encode"
    />
  </div>
);

EncodingInput.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
  }).isRequired,
  startType: PropTypes.string.isRequired,
  onStartTypeChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default EncodingInput;
