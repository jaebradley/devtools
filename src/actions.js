import {
  ADD_TO_CLIPBOARD,
  REMOVE_FROM_CLIPBOARD,
  UPDATE_ENCODED_VALUE,
  INPUT_CHANGE,
  UPDATE_ENCODING_START_TYPE,
  UPDATE_ENCODING_END_TYPE,
} from './actionTypes';

const addToClipboard = ({ value }) => ({ type: ADD_TO_CLIPBOARD, payload: { value } });
const removeFromClipboard = id => ({ type: REMOVE_FROM_CLIPBOARD, payload: { id } });
const updateEncodedValue = ({
  startType,
  startValue,
  endType,
  endValue,
}) => ({
  type: UPDATE_ENCODED_VALUE,
  payload: {
    startType,
    startValue,
    endType,
    endValue,
  },
});
const handleInputChange = value => ({ type: INPUT_CHANGE, payload: { value } });
const updateEncodingStartType = value => ({
  type: UPDATE_ENCODING_START_TYPE,
  payload: {
    encodingStartType: value,
  },
});
const updateEncodingEndType = value => ({
  type: UPDATE_ENCODING_END_TYPE,
  payload: {
    encodingEndType: value,
  },
});

export {
  addToClipboard,
  removeFromClipboard,
  updateEncodedValue,
  handleInputChange,
  updateEncodingStartType,
  updateEncodingEndType,
};
