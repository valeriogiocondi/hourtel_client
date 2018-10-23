'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import allReducers from './components/redux/reducers/allReducers'
import * as serviceWorker from './serviceWorker';
import Header from './components/modules/Header/Header';
import Footer from './components/modules/Footer/Footer';
import Home from './components/modules/Content/Home/Home';
import Login from './components/modules/Content/Login/Login';
import Logout from './components/modules/Content/Logout/Logout';
import Registration from './components/modules/Content/Registration/Registration';
import Search from './components/modules/Content/Search/Search';
import Hotel from './components/modules/Content/Hotel/Hotel';
import UserArea from './components/modules/Content/UserArea/UserArea';
import Page404 from './components/modules/Content/Page404/Page404';
import './index.css';

const store = createStore(allReducers);

const Index = ({ store }) => (
  <Provider store={store}>
    <Router>
	    <div>
	    	<Header />
	    	<article id="main-article">
      		<Switch>
		      	<Route exact path="/" component={Home} />
		      	<Route path="/login" component={Login} />
		      	<Route path="/logout" component={Logout} />
		      	<Route path="/registrati" component={Registration} />
		      	<Route path="/cerca" component={Search} />
		      	<Route path="/hotel/:id" component={Hotel} />
		      	<Route path="/area-utente" component={UserArea} />
	        	<Route component={Page404} />
      		</Switch>
	    	</article>
	    	<Footer />
	    </div>
    </Router>
  </Provider>
)

ReactDOM.render(<Index store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
