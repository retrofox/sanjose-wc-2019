/**
 * External dependencies
 */
import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

/**
 * Internal dependencies
 */
import { reducer, initialState } from '../lib/reducer';
import { fetching, success, error } from '../lib/actions-creator';

/**
 * Config
 */

import config from '../config/development';
const { API_HOST } = config;

const useWPComApiRequest = ( endpoint, initialData, {
	namespace = `rest`,
	version = `v1.1`,
	token = null,
	longPolling = false,
} ) => {
	const [ data, setData ] = useState( initialData );
	const [ url, setUrl ] = useState( `${ API_HOST }/${ namespace }/${ version }${ endpoint }` );
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isError, setIsError ] = useState(false);
	const [ requestAgain, triggerRequest ] = useReducer( state => state + 1, 0 );

	const setEndpoint = ( path ) => setUrl( `${ API_HOST }/${ namespace }/${ version }${ path }` );

	const requester = axios.create( {
		baseURL: API_HOST,
		headers: { Authorization: `Bearer ${token}` }
	} );

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
			console.count( 'timer' );
			// triggerRequest();
		}, longPolling);

		return () => window.clearInterval( timerId );
	}, [] );


	useEffect( () => {
		const fetchData = async () => {
			setIsError( false );
			setIsLoading( true );
			try {
				if ( ! token ) {
					console.warn( 'No Token Provided!' );
					return;
				}
				const result = await requester(url);
				setData(result.data);
			} catch (error) {
				console.error( error );
				setIsError(true);
			}
			setIsLoading(false);
		};
		fetchData();
	}, [url, requestAgain ] );

	return [ { data, isLoading, isError }, setEndpoint ];
};

export default useWPComApiRequest;
