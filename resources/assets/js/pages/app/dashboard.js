'use strict';

import connectToStores from '../../utils/connectToStores'

import CommonStore from '../../stores/CommonStore'
import CommonActionCreators from '../../actions/CommonActionCreators'

class Dashboard extends React.Component {
    
	static getStores(props) {
		return [CommonStore]
	}

	static getPropsFromStores(props) {
		return CommonStore.getState().common;
	}

    componentDidMount() {
    	// Update meta title
    	document.title = 'Dashboard';
    }

    render() {
        return (
            <div className="my-dashboard">
            	<div className="container">
	                <h1>Dashboard - {this.props.abc}</h1>
	            </div>
            </div>
        )   
    }
}

export default connectToStores(Dashboard)
