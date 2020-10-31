import { combineEpics } from 'redux-observable';
import { fetchStationsEpic } from './stations/epics'

const rootEpic = combineEpics(
  fetchStationsEpic
);

export default rootEpic;