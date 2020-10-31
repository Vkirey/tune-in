import { combineReducers } from 'redux';

import stationsReducer from './stations/reducer';


const rootReducer = combineReducers({
    radio: stationsReducer,
});

export default rootReducer;