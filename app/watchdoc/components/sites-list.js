/**
 * External dependencies
 */
import {map} from "lodash";
import React from "react";

export default ({sites}) => <div className="sites-container">
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
