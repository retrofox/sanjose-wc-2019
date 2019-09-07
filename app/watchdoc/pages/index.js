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

const Home =  () => {
	const [ { data, isLoading, isError }, doFetch ] = useWPComApi(
		'/me/sites', {
			sites: []
		}, {
			token: getToken(),
			longPolling: false,
		}
	);

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
					{ data }
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

		<SitesList sites={ data.sites } />
	</Layout>
}

export default Home;
