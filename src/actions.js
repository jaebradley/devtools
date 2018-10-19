import {
  ADD_TO_CLIPBOARD,
  REMOVE_FROM_CLIPBOARD,
  UPDATE_DISPLAY_VALUE,
  INPUT_CHANGE,
} from './actionTypes';

const addToClipboard = ({ value }) => ({ type: ADD_TO_CLIPBOARD, payload: { value } });
const removeFromClipboard = id => ({ type: REMOVE_FROM_CLIPBOARD, payload: { id } });
const updateDisplayValue = ({ value }) => ({ type: UPDATE_DISPLAY_VALUE, payload: { value } });
const handleInputChange = value => ({ type: INPUT_CHANGE, payload: { value } });

export {
  addToClipboard,
  removeFromClipboard,
  updateDisplayValue,
  handleInputChange,
};
