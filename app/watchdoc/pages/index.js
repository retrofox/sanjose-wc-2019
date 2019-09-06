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
		case 'getSitesList':
	    	return { ...state, sites: action.sites };

		case 'getSiteActivity':
			return {
				...state,
				activity: {
					...state.activity,
					[action.siteID]: {
						name: action.siteName,
						events: action.activity
					}
				}
			};
	}
};

export default ({accessToken}) => {
	const [ state, dispatch ] = useReducer(dataReducer, {
		sites: [],
		activity: {},
	});

	const [ count, setCount ] = useState( 0 );

	let timerId;
	useEffect( () => {
		console.warn( 'create interval!' );
		timerId = setInterval(() => {
			setCount( count + 1 );
		}, 5000);
	}, [] );

	useEffect( () => {
		if ( ! accessToken ) {
			console.warn( 'NO Access Token!' );
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
		.then( json => {
			const sites = json.sites;
			for ( const i in sites ) {
				const site = sites[i];

				fetch( `${API_HOST}/wpcom/v2/sites/${site.ID}/activity`, {
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${accessToken}`,
					},
				} )
					.then( response => response.json() )
					.then( json => dispatch({
						type: 'getSiteActivity',
						siteID: site.ID,
						siteName: site.name,
						activity: json.current.orderedItems,
					}));
			}
			return sites;
		})
		.then( sites => dispatch({
			type: 'getSitesList',
			sites,
		}));

		return (
			window.clearInterval(timerId)
		)
	}, [ count ] );

  	return <Layout>
	  	<h1 style={{
	  		fontSize: '25px',
			textAlign: 'center',
			fontFamily: 'monospace',
		}}>
			🐶 Watchdog
		</h1>

		<SitesList sites={ state.sites } activity={ state.activity } />
	</Layout>
}
