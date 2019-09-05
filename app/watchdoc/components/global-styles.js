/**
 * External dependencies
 */
import css from 'styled-jsx/css';

export default css.global`
* {
	box-sizing: border-box;
}

body {
	background-color: #111;
	color: white;
	font-family: monospace;
	padding: 0;
	margin: 0;
}

a {
	color: #8f8;
}

a:hover {
	color: $dfd;
}

h1 {
	text-align: center;
}

section.main-container {
	position: relative;
	z-index: 0;
	width: 100%;
	max-width: 600px;
	margin: 0 auto;
	height: 100vh;
	padding-top: 60px;
	padding-bottom: 40px;
}
`;
