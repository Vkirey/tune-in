import * as ACTIONS from './types';
import { IStation, Station, JSONStation } from '../../types'

interface ActionType {
    type: string,
    payload: any
}

export type RadioState = {
    stations: IStation[],
    loading: boolean,
    error: string | null,
    selectedStationId: string | null,
    searchTerm: string,
    tags: string[]
}

const INITIAL_STATE: RadioState = {
    stations: [],
    loading: true,
    error: null,
    selectedStationId: null,
    searchTerm: '',
    tags: []
};

const reducer = (state:RadioState = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case ACTIONS.ON_STATIONS_LOADED:
            return {
                ...state,
                stations: action.payload.data.
                    map((station: JSONStation) => new Station(station)).
                    sort((a: IStation, b:IStation) => (a.popularity > b.popularity) ? -1 : ((b.popularity > a.popularity) ? 1 : 0)),
                loading: false
            }
        case ACTIONS.ON_STATIONS_LOAD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ACTIONS.SELECT_STATION:
            return {
                ...state,
                selectedStationId: action.payload
            }
        case ACTIONS.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            }
        case ACTIONS.ADD_TAG_FILTER:
            return {
                ...state,
                tags: state.tags.includes(action.payload) ? state.tags : [...state.tags, action.payload]
            }
        case ACTIONS.REMOVE_TAG_FILTER:
            return {
                ...state,
                tags: state.tags.filter(item => item !== action.payload)
            }
        default: return state;
    }

};

export default reducer;