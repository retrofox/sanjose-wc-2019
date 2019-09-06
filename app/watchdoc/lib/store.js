/**
 * External dependencies
 */
import localforage from 'localforage';

/**
 * Store instance
 */
const store = localforage.createInstance( {name: 'watchdog'});

export const accessToken = store.getItem( 'access_token' );

export default store;
