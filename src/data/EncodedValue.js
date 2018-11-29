import {
  Record,
} from 'immutable';

const defaults = {
  startValue: '',
  startType: '',
  endType: '',
  endValue: '',
};

class EncodedValue extends Record(defaults) {}

export default EncodedValue;
