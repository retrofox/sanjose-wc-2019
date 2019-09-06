/**
 * External dependencies
 */
import {map} from "lodash";
import React from "react";
import moment from 'moment';

export default ({sites, activity}) => <div className="sites-container">
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
	<ul>
		{
			map( sites, site =>
				<div key={ site.ID } className="site-container">
					<li>
						<span className="site-id">{ site.ID }</span>
						<a href={ site.URL }>{ site.name }</a>

						{/*<ul>*/}
						{/*	{*/}
						{/*		map(*/}
						{/*			activity[site.ID] ? activity[site.ID].events : [],*/}
						{/*			( event, ind ) =>*/}
						{/*			<li key={ `activity-${site.ID}-${ind}`} className="events-container">*/}
						{/*				{ event.summary } by { event.actor.name } { moment( event.published ).fromNow()}*/}
						{/*			</li>*/}
						{/*		)*/}
						{/*	}*/}
						{/*</ul>*/}
					</li>
				</div>
			)
		}
	</ul>
</div>;
