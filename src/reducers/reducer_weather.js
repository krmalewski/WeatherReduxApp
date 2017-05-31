import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// concat creates a new array combining existing array of cities with new cities
			// In redux, may sure you are always returning a new instance of state and never altering/manipulating the current state 
			// (this would have happened if we did state.push etc)
			// return state.concat([action.payload.data]); same as below
			return [ action.payload.data, ...state ];
	}
	return state;
}