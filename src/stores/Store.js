import AppDispatcher from '../dispatcher/AppDispatcher';
import { Constants } from '../constants/Constants';
import { EventEmitter } from 'events';
import { getMeetupGroups } from '../api/meetupAPI';

const CHANGE_EVENT = 'change';

let _store = {
  zip: null,
  groups: null
};

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
class StoreClass extends EventEmitter {

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  getStore() {
    return _store;
  }
}

// Initialize the singleton to register with the
// dispatcher and export for React components
const Store = new StoreClass();

// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {
    case Constants.ADD:
      getMeetupGroups(action.text).end((err, response) => {
        window.results = response.body;
        if (err) return console.error(err);
        _store.zip = action.text;
        _store.groups = response.body;
        Store.emit(CHANGE_EVENT);
      });
      break;

    default:
      return true;
  }
});

export default Store;
