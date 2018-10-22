import {
  Map,
  OrderedMap,
} from 'immutable';
import shortid from 'shortid';

import Item from './data/Item';
import EncodedValue from './data/EncodedValue';
import {
  ADD_TO_CLIPBOARD,
  REMOVE_FROM_CLIPBOARD,
  UPDATE_ENCODED_VALUE,
} from './actionTypes';
import {
  ENCODING_TYPE,
} from './constants';

const initialState = new Map({
  clipboard: new OrderedMap(),
  encodedValue: new EncodedValue({
    startType: ENCODING_TYPE.TEXT,
    endType: ENCODING_TYPE.BASE_64,
    startValue: '',
    endValue: '',
  }),
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

    case UPDATE_ENCODED_VALUE: {
      return state.set('encodedValue', new EncodedValue(action.payload));
    }

    default: {
      return state;
    }
  }
};

export default app;
