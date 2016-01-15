'use strict';

import '../../../less/components/partials/footer.less';

import { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Footer extends Component {
    
    render() {
        return (
        	<footer id="footer" className="footer">
        		<div className="footer-inner">
        			<div className="container">
        				I am footer
        			</div>
        		</div>
        	</footer>
        )   
    }
}

export default Footer;
