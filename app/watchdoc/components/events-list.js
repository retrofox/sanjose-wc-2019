import React from "react";
import { map, filter } from 'lodash';
import moment from 'moment';

const getSiteInfo = ( sites, siteID ) => {
	const site = filter( sites, { ID: siteID } )[0];
	return site.name;
}

const ActivityList = ( { activity, sites } ) =>
	<div className="events-list-container">
		<h3>Activity Log</h3>
	</div>;

export default ActivityList;
