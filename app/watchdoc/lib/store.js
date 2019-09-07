/**
 * External dependencies
 */

export const setToken = ( token ) => window.localStorage.setItem( 'token', token );
export const getToken = () => typeof window !== 'undefined'
	? window.localStorage.getItem( 'token' )
	: null;
