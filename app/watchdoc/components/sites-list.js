/**
 * External dependencies
 */
import {filter, map} from "lodash";
import React from "react";
import moment from 'moment';

const getActivityEvents = ( activity, siteId ) => {
	if ( ! activity ) {
		return [];
	}

	if ( ! activity[ siteId ] ) {
		return [];
	}

	return activity[ siteId ].current.orderedItems;
}

const SitesList = ( { sites, activity } ) => {
	return (
		<div className="sites-container">
	<style jsx>{`
	ul li {
		list-style: none;
	}
	
	ul li .site-id {
		width: 80px;
		display: inline-block;
	}
	
	.site-container {
		margin-bottom: 5px;
	}
`}</style>
	<h3>WordPress Sites</h3>
	<ul>
		{
			map( sites, site =>
				<div key={ site.ID } className="site-container">
					<li>
						<span className="site-id">{ site.ID }</span>
						<a href={ site.URL }>{ site.name }</a>
					</li>

					<ul>
						{ map( getActivityEvents( activity, site.ID ), ( { summary, activity_id, actor, published } ) =>
							<li key={ activity_id } className="events-container">
								{ summary } by { actor.name } { moment( published ).fromNow() }
							</li>
						) }
					</ul>

				</div>
			)
		}
	</ul>
</div>) };

export default SitesList;

