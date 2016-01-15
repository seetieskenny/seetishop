'use strict';

import { Component, PropTypes } from 'react';

class TestComponent2 extends Component {
    
    render() {
    	const { testid } = this.props.params;

        return (
            <h1>Test Component 2 - {testid}</h1>
        )   
    }
}

export default TestComponent2;
