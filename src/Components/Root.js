import React , { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App'
import X from './X'

export default class Root extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/app" component={<App/>}/>
				<Route path="/next" component={<X/>} />
			</Router>
		);
	}
}
