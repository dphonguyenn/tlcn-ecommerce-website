import { combineReducers } from 'redux';
import devices from './devices.js';
import detailed_device from './detailed_device.js';
import user from './user.js';
import hover_component from './hover_component.js';
import filters from './filters.js';
import orders from './orders.js';
export default combineReducers({
  devices,
  detailed_device,
  filters,
  orders,
  hover_component,
  user
});
