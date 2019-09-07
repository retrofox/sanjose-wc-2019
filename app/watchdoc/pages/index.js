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
import { getToken } from '../lib/store';
import config from "../config/development";
const { API_HOST } = config;

const Home =  () => {
	// create requester by custom hook.
	const [ { data: sitesData, isSitesError }, fetchSites ] = useWPComApi(
		{ sites: [] }, { token: getToken(), longPolling: false }
	);

	const [ { data: activityData, isActivityError }, fetchSiteEvents ] = useWPComApi(
		{ sites: [] }, {
			token: getToken(),
			longPolling: false,
			namespace: 'wpcom',
			version: 'v2',
		}
	);


	useEffect( () => {
		fetchSites( '/me/sites/' );

		// Fetch me sites
		if ( sitesData.sites && sitesData.sites.length ) {
			const sites = sitesData.sites;

			console.log( { sites } );


			for ( const ind in sites ) {
				const site = sites[ ind ];
				const siteId = site.ID;
				console.log( { siteId } );

				setTimeout( () => {
					fetchSiteEvents(`/sites/${siteId}/activity`);
				}, 1000 );
			}
		}
	}, [ sitesData.sites ] );

	if ( isSitesError ) {
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


  	return <Layout>
	  	<h1 style={{
	  		fontSize: '25px',
			textAlign: 'center',
			fontFamily: 'monospace',
		}}>
			🐶 Watchdog
		</h1>

		<SitesList sites={ sitesData.sites } />
	</Layout>
}

export default Home;
