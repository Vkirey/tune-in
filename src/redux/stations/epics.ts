import { ajax } from 'rxjs/ajax';
import { ofType,  } from 'redux-observable';
import { mergeMap, map, mapTo } from 'rxjs/operators';
import { FETCH_STATIONS, ON_STATIONS_LOADED } from './types';


function onStationsLoaded(payload:any): any {
    return ({ type: ON_STATIONS_LOADED, payload })
};

export const fetchStationsEpic = (action$: any) => action$.pipe(
    ofType(FETCH_STATIONS),
    mergeMap(action =>
      ajax.getJSON(`https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json`).pipe(
        map(response => onStationsLoaded(response))
      )
    )
  );