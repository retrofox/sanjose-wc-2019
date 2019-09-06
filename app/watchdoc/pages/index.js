/**
 * External dependencies
 */
import React, { useEffect, useState, useReducer } from 'react';

/**
 * Internal dependencies
 */
import Layout from '../components/layout'
import SitesList from '../components/sites-list';

/**
 * Internal dependencies
 */
import config from '../config/development';
const { API_HOST } = config;

const dataReducer = ( state, action ) => {
	switch ( action.type ) {
		case 'requestSitesList':
	    	return { ...state, sites: action.sites };
	        break;
	}
};

export default ({accessToken}) => {
	const [ state, dispatch ] = useReducer(dataReducer, {});

	useEffect( () => {
	    if ( ! accessToken ) {
	    	return;
		}

	    fetch( `${API_HOST}/rest/v1.1/me/sites`, {
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
		} )
			.then( response => response.json() )
			.then( json => dispatch({
				type: 'requestSitesList',
				sites: json.sites,
			}));
	}, [] );

  	return <Layout>
	  	<h1 style={{
	  		fontSize: '25px',
			textAlign: 'center',
			fontFamily: 'monospace',
		}}>
			🐶 Watchdog
		</h1>

		<SitesList sites={ state.sites } />
	</Layout>
}
