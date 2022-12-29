import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/homePage'
import Account from '../Components/account'
import Login from '../Components/login'
import SignUp from '../Components/signup'
import Board from '../Components/boards'
import Reset from '../Components/resetP'

const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/account"><Account /></Route>
				<Route exact path="/login"><Login /></Route>
				<Route exact path="/signup"><SignUp /></Route>
				<Route path="/board"><Board /></Route>
				<Route path="/reset"><Reset /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;