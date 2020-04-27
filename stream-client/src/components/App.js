import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';

const app = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/create" exact component={StreamCreate} />
					<Route path="/streams/edit/:id" exact component={StreamEdit} />
					<Route path="/streams/show/:id" exact component={StreamShow} />
					<Route path="/streams/delete/:id" exact component={StreamDelete} />
				</div>
			</Router>
		</div>
	);
};

export default app;
