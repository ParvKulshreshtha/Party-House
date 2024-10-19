// store/rootReducer.ts
import { combineReducers } from 'redux';
// Import your reducers here
import globalReducer from './globalSlice';

const rootReducer = combineReducers({
  global: globalReducer,
  // Add your other reducers here
});

export default rootReducer;
