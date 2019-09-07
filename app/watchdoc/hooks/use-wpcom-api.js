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

const useWPComApiRequest = ( endpoint, initialData, {
	namespace = `rest`,
	version = `v1.1`,
	longPolling = false,
	token = null,
} ) => {
	const [ data, setData ] = useState( initialData );
	const [ url, setUrl ] = useState( `${ API_HOST }/${ namespace }/${ version }${ endpoint }` );
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isError, setIsError ] = useState(false);
	const [ requestAgain, triggerRequest ] = useReducer( state => state + 1, 0 );

	const setEndpoint = ( path ) => setUrl( `${ API_HOST }/${ namespace }/${ version }${ path }` );

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
		const fetchData = async () => {
			setIsError( false );
			setIsLoading( true );
			try {
				const result = await requester(url);
				setData(result.data);
			} catch (error) {
				setData( error.message );
				setIsError(true);
			}
			setIsLoading(false);
		};
		fetchData();

		return () => source.cancel( 'BOO!' );
	}, [url, requestAgain, token ] );

	return [ { data, isLoading, isError }, setEndpoint ];
};

export default useWPComApiRequest;
