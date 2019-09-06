
import { FETCHING, SUCCESS, ERROR } from './actions-types';

export const fetching = () => ({ type: FETCHING });
export const success = response => ({ type: SUCCESS, response });
export const error = response => ({ type: ERROR, response });
