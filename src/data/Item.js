import {
  Record,
} from 'immutable';

const defaults = {
  id: null,
  value: null,
};

class Item extends Record(defaults) {};

export default Item;
