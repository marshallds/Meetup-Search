import { Constants } from '../constants/Constants';
import AppDispatcher from '../dispatcher/AppDispatcher';

export function save(text) {
  AppDispatcher.handleViewAction({
    actionType: Constants.ADD,
    text: text
  });
}
