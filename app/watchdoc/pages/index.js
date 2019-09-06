/**
 * External dependencies
 */
import React, { useEffect, useState } from 'react';
import { map } from 'lodash';


/**
 * Internal dependencies
 */
import Layout from '../components/layout'

/**
 * Internal dependencies
 */
import config from '../config/development';
const { API_HOST } = config;

const SitesList = ( { sites } ) => <div className="sites-container">
	<style jsx>{`
		ul li {
			list-style: none;
		}
		
		ul li .site-id {
			width: 100px;
			display: inline-block;
		}
	`}</style>
	<ul>
	{
		map( sites, site =>
			<div key={ site.ID } className="site-container">
				<li>
					<span className="site-id">{ site.ID }</span>
					{ site.name }
				</li>
			</div>
		)
	}
	</ul>
</div>;

export default ( { accessToken }) => {
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
