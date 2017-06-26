import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import App from './components/App';
import SingUp from './components/SignUp';
import SignIn from './components/SignIn';
import { firebaseApp } from './firebase';
import reducer from './reducers/index';
import { logUser } from './actions/index';

const store = createStore(reducer);

function dispatchUser(routeProps: RouteComponentProps<any>) {
	firebaseApp.auth().onAuthStateChanged((user: firebase.User) => {
		if (user) {
			const { email } = user;
			store.dispatch(logUser(email || ""));
			routeProps.history.push("/app");
		}
		else {
			routeProps.history.replace("/signin");
		}
	});
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/" render={(routeProps: RouteComponentProps<any>) => {
					dispatchUser(routeProps);
					return null;
				}} />
				<Route path="/app" exact={true} render={(routeProps: RouteComponentProps<any>) => {
					dispatchUser(routeProps);
					return <App {...routeProps} />
				}} />
				<Route path="/signin" exact={true} render={() => <SignIn />} />
				<Route path="/signup" exact={true} render={() => <SingUp />} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root') as HTMLElement
); 