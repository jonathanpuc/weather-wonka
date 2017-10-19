import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

	switch (action.type) {
		case FETCH_WEATHER:
			// return a new array with current state included with added data of city searched
			return [ action.payload.data, ...state ];
	}
	return state;
}