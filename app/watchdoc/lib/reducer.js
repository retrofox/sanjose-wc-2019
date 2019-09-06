/**
 * Internal dependencies
 */
import { FETCHING, SUCCESS, ERROR } from './actions-types';

export const initialState = {
	sites: [],
	activity: {},
};

export const reducer = ( state = initialState, { type, response } ) => {
	switch ( type ) {
		case FETCHING:
			return { ...state, status: FETCHING };

		case SUCCESS:
			return { ...state, status: SUCCESS, response };

		case ERROR:
			return { ...state, status: ERROR, response };

		// case 'getSiteActivity':
		// 	return {
		// 		...state,
		// 		activity: {
		// 			...state.activity,
		// 			[action.siteID]: {
		// 				name: action.siteName,
		// 				events: action.activity
		// 			}
		// 		}
		// 	};
	}
};

