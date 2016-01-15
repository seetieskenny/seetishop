'use strict';

import { Component } from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';

class AppLayout extends Component {
	render() {
		const { location } = this.props;

		return (
			<div id="MasterLayout">
				<Header location={location}/>

				<div className="content">
					{this.props.children}
				</div>

				{/*<Footer />*/}
			</div>
		)
	}
};

export default AppLayout;