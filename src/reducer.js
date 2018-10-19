import {
  Map,
  OrderedMap,
} from 'immutable';
import shortid from 'shortid';

import Item from './data/Item';
import {
  ADD_TO_CLIPBOARD,
  REMOVE_FROM_CLIPBOARD,
  UPDATE_DISPLAY_VALUE,
} from './actionTypes';

const initialState = new Map({
  clipboard: new OrderedMap(),
  displayValue: '',
});

const app = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CLIPBOARD: {
      const item = new Item({
        id: shortid(),
        value: action.payload.value,
      });
      return state.set('clipboard', state.get('clipboard').set(item.id, item));
    }

    case REMOVE_FROM_CLIPBOARD: {
      return state.set('clipboard', state.get('clipboard').delete(action.payload.id));
    }

    case UPDATE_DISPLAY_VALUE: {
      return state.set('displayValue', action.payload.displayValue);
    }

    default: {
      return state;
    }
  }
};

export default app;
