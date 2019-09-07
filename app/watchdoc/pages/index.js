/**
 * External dependencies
 */
import React, { useEffect } from 'react';

/**
 * Internal dependencies
 */
import useWPComApi from '../hooks/use-wpcom-api';
import Layout from '../components/layout'
import SitesList from '../components/sites-list';

import { getToken } from '../lib/store';
import config from "../config/development";

const { API_HOST } = config;

const Home =  () => {
	// create requester by custom hook.
	const [ { state, requestAgain }, doFetch ] = useWPComApi(
		{ sites: [] }, { token: getToken(), longPolling: 10000 }
	);

	const { data, isError, isLoading } = state;

	useEffect( () => {
		doFetch( {
			url: `${ API_HOST }/rest/v1.1/me/sites/`,
			resource: 'sites',
		} );

		const sites = data.sites ? data.sites.sites : [];

		// Fetch me sites
		if ( sites.length ) {
			for ( const ind in sites ) {
				const site = sites[ ind ];
				const siteId = site.ID;

				setTimeout( () => {
					console.log( `fetching ${ siteId } site `);
					doFetch( {
						url: `${ API_HOST }/wpcom/v2/sites/${siteId}/activity`,
						resource: 'activity',
					} );
				}, 500 * ind );
			}
		}
	}, [ requestAgain ] );

	if ( isError ) {
		return (
			<Layout title="No Connection">
				<style jsx>{`
					width: 300px;
					position: absolute;
					top: 50%;
					margin-top: -30px;
					left: 50%;
					margin-left: -150px;
					border: 1px solid red;
					border-radius: 10px;
					height: 60px;
					line-height: 60px;
					text-align: center;
					background-color: #800;
				`}
				</style>
				<div className='error-response'>
					{ typeof data === 'string' ? data : 'Desconocido' }
				</div>
			</Layout>
		);
	}

	const sites = data.sites ? data.sites.sites : [];

  	return <Layout>
	  	<h1 style={{
	  		fontSize: '25px',
			textAlign: 'center',
			fontFamily: 'monospace',
		}}>
			🐶 Watchdog
		</h1>

		{ ( isLoading ) &&
			<div className="is-loading">
				<style jsx>{`
					position: absolute;
					right: 10px;
					background-color: #040;
					color: #afa;
					border-radius: 3px;
					padding: 3px 10px;
					animation: pulse 500ms infinite alternate;
					
					@keyframes pulse {
						0% {
							background-color: #0a0;
						}
						
					 	100% {
							background-color: #030;
					 	}
					}
				`}</style>
				loading
			</div>
		}

		<SitesList sites={ sites } activity={ data.activity } />
	</Layout>
}

export default Home;
