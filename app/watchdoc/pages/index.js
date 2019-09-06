/**
 * External dependencies
 */
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout'

/**
 * Internal dependencies
 */
import config from '../config/development';
const { API_HOST } = config;

export default ( { accessToken }) => {
	const [ sites, setSites ] = useState([]);

	useEffect( () => {
	    if ( ! accessToken ) {
	    	return;
		}

	    fetch( `${API_HOST}/rest/v1.1/me/sites`, {
			// method: 'POST', // *GET, POST, PUT, DELETE, etc.
			// mode: 'cors', // no-cors, cors, *same-origin
			// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			// credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
		} )
			.then( response => response.json() )
			.then( json => setSites( json ) );
	}, [] );

  	return <Layout>
	  	<h1 style={{
	  		fontSize: '25px',
			textAlign: 'center',
			fontFamily: 'monospace',
		}}>
			🐶 Watchdog
	  	</h1>
	</Layout>
}
