/**
 * External dependencies
 */
import {useRouter} from "next/dist/client/router";
import qs from "query-string";

// Pickup access token from query string hash.
export default () => {
	const router = useRouter();

	const rawQS = router && router.asPath
		? router.asPath.substr(1)
		: null;

	const data = rawQS ? qs.parse(rawQS) : null;
	return data ? data.access_token : null;
}
