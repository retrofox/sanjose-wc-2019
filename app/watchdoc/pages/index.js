/**
 * External dependencies
 */
import React, { useEffect, useState } from 'react';

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

export default ({accessToken}) => {
	const [ sites, setSites ] = useState([]);

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
			.then( json => setSites( json.sites ) );
	}, [] );

  	return <Layout>
	  	<h1 style={{
	  		fontSize: '25px',
			textAlign: 'center',
			fontFamily: 'monospace',
		}}>
			🐶 Watchdog
		</h1>

		<SitesList sites={ sites } />
	</Layout>
}
