import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StoreProvider } from './Store';
import { Router, RouteComponentProps } from '@reach/router';
import HomePage from './components/HomePage';
import FavPage from './components/FavPage';

const RouterPage = (
	props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
	<StoreProvider>
		<Router>
			<RouterPage pageComponent={<HomePage />} path="/money-heist" />
			<RouterPage pageComponent={<FavPage />} path="/money-heist/faves" />
		</Router>
	</StoreProvider>,
	document.getElementById('root')
);
