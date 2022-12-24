import { combineReducers } from 'redux';
import devices from './devices.js';
import detailedDevice from './detailedDevice.js';
import user from './user.js';
import focusComponent from './focusComponent.js';
import filters from './filters.js';
import orders from './orders.js';
export default combineReducers({
  devices,
  detailedDevice,
  filters,
  orders,
  focusComponent,
  user
});
