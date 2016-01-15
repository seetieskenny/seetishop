'use strict';

import { Component, PropTypes } from 'react';

class TestComponent extends Component {
    
    render() {
        return (
            <div>
                <h1>Test Component 1</h1>
                <div className="circle" style={{backgroundColor: '#eee', width: '300px', height: '300px'}}></div>
            </div>
        )   
    }
}

export default TestComponent;
