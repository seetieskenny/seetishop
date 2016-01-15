'use strict';

import "../../less/style.less"

import { render } from 'react-dom'

// @browserHistory is undefined, do check with latest package issues
import { browserHistory, Router } from 'react-router'
import history from '../utils/history'

import AppLayout from '../components/layouts/AppLayout'
import Dashboard from './app/dashboard'
import VoucherCreate from './app/voucherCreate'


/**
 * Define your routes here
 */
const routes = {
	path 		: '/',
	component 	: AppLayout,
	indexRoute 	: { component: Dashboard },
	childRoutes : [
		{ 
			path 		: 'voucher', 
			component 	: VoucherCreate 
		},
		{ 
			path 		: 'shop', 
			component 	: VoucherCreate 
		},
		{ 
			path 		: 'admin', 
			component 	: VoucherCreate 
		}
	]
}

render(
	<Router history={history} routes={routes} />, 
	document.getElementById('App')
)