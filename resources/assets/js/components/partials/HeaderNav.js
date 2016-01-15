'use strict';

import { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

class HeaderNav extends Component {
    
    render() {
    	
        return (
        	<nav>
	        	<ul className="list-inline">
	        		<li><Link to="/voucher">My Voucher</Link></li>
	        		<li><Link to="/shop">Manage Shops</Link></li>
	        		<li><Link to="/admin">Administrator</Link></li>
	        	</ul>
	        </nav>
        )   
    }
}

export default HeaderNav;
