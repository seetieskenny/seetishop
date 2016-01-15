'use strict';

import '../../../less/components/partials/header.less'

import { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

import HeaderNav from './HeaderNav'

class Header extends React.Component {
    
    render() {
    	const { location } = this.props;

        return (
        	<header id="header" className="header">
        		<div className="header-inner">
        			<div className="container">
        				<div className="logo pull-left">
        					<IndexLink to="/">Seetishop</IndexLink>
    					</div>

        				<div className="header-nav">
	        				<HeaderNav location={location} />
	        			</div>

	        			<div className="header-user-nav pull-right">

	        			</div>
        			</div>
        		</div>
        	</header>
        )   
    }
}

export default Header
