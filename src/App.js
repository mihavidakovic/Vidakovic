import React, { Component } from 'react';
import Home from './pages/Home/Home.js';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-133841417-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
	render() {

		return (
			<div className="App">
				<Home />
			</div>
		);
	}
}

export default App;
