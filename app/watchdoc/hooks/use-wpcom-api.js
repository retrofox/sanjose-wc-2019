/**
 * External dependencies
 */
import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

/**
 * Config
 */
import config from '../config/development';
const { API_HOST } = config;

const dataFetchReducer = ( state, { type, payload, error, resource } ) => {
	switch ( type ) {
		case 'FETCH_INIT':
			return { ...state, isLoading: true, isError: false };
		case 'FETCH_SUCCESS':
			let data = {};
			if ( resource === 'activity' ) {
				// get Site ID from id
				let siteID = payload.id.match( /sites\/(.+)\// );
				siteID = siteID.length > 1 ? Number( siteID[1] ): payload.id;

				data = {
					...state.data,
					activity: {
						...state.data.activity,
						[ siteID ]: {
							siteID,
							...payload,
						},
					}
				}
			} else {
				data = {
				...state.data,
					[ resource ]: {
				...payload
				} }
			}

			return {
				...state,
				isLoading: false,
				isError: false,
				data,
				error: null,
			};
		case 'FETCH_FAILURE':
			return { ...state, isLoading: false, isError: true, error };
		default:
			throw new Error();
	}
};

const useWPComApiRequest = ( initialData, {
	longPolling = false,
	token = null,
} ) => {
	const [ { url, resource }, setRequest ] = useState('');
	const [ requestAgain, triggerRequest ] = useReducer( state => state + 1, 0 );

	const [ state, dispatch ] = useReducer( dataFetchReducer, {
		data: {},
		isLoading: false,
		isError: false,
	} );

	const requestParams = {
		baseURL: API_HOST,
	};

	if ( token ) {
		requestParams[ 'headers' ] = { Authorization: `Bearer ${token}` };
	}

	const requester = axios.create( requestParams );

	const CancelToken = axios.CancelToken;
	const source = CancelToken.source();

	// Init timer once.
	useEffect( () => {
		if ( ! longPolling ) {
			return;
		}

		// Delay must be greater than 3s.
		let delay = Number( longPolling );
		if ( ! delay || delay < 3000 ) {
			return;
		}

		const timerId = setInterval( () => {
			triggerRequest();
		}, longPolling);

		return () => window.clearInterval( timerId );
	}, [] );


	useEffect( () => {
		if ( ! url ) {
			return;
		}

		const fetchData = async () => {
			dispatch( { type: 'FETCH_INIT' } );

			try {
				const result = await requester(url);
				dispatch( { type: 'FETCH_SUCCESS', payload: result.data, resource } );
			} catch (error) {
				dispatch( { type: 'FETCH_FAILURE', error } );
			}
		};
		fetchData();

		return () => source.cancel( 'BOO!' );
	}, [ url, requestAgain, token ] );

	return [ { state , requestAgain }, setRequest ];
};

export default useWPComApiRequest;
