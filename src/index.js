import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import store from './redux/store';
import './assets/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('app')
);
