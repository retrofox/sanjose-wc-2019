/**
 * External dependencies
 */
import React, { useEffect, useReducer, useState } from 'react';

/**
 * Internal dependencies
 */
import useWPComApi from '../hooks/use-wpcom-api';
import Layout from '../components/layout'
import SitesList from '../components/sites-list';

const Home =  ({accessToken}) => {
	const [ { data, isLoading, isError }, doFetch ] = useWPComApi(
		'/me/sites', {
			sites: []
		}, {
			token: accessToken,
			longPolling: 5000,
		}
	);

  	return <Layout>
	  	<h1 style={{
	  		fontSize: '25px',
			textAlign: 'center',
			fontFamily: 'monospace',
		}}>
			🐶 Watchdog
		</h1>

		<SitesList sites={ data.sites } />
	</Layout>
}

export default Home;
