import React from 'react';
import PropTypes from 'prop-types';

import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import {
  ENCODING_TYPE,
} from '../constants';

const ENCODING_TYPE_DISPLAY_VALUE = Object.freeze({
  [ENCODING_TYPE.TEXT]: 'Text',
  [ENCODING_TYPE.BASE_64]: 'Base 64',
});

const EncodingOutput = ({
  classes,
  endType,
  endValue,
  onEndTypeChange,
}) => (
  <div className={classes.root}>
    <Select
      native
      value={endType}
      onChange={onEndTypeChange}
    >
      <option value={ENCODING_TYPE.TEXT}>
        { ENCODING_TYPE_DISPLAY_VALUE[ENCODING_TYPE.TEXT] }
      </option>
      <option value={ENCODING_TYPE.BASE_64}>
        { ENCODING_TYPE_DISPLAY_VALUE[ENCODING_TYPE.BASE_64] }
      </option>
    </Select>
    <Typography classes={{ root: classes.output }} paragraph>
      { endValue || 'No input value' }
    </Typography>
  </div>
);

EncodingOutput.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    output: PropTypes.string.isRequired,
  }).isRequired,
  onEndTypeChange: PropTypes.func.isRequired,
  endType: PropTypes.string.isRequired,
  endValue: PropTypes.string.isRequired,
};

export default EncodingOutput;
