'use strict';

import CommonActionCreators from '../actions/CommonActionCreators'
import alt from '../utils/alt'

class CommonStore {

    constructor() {
        /*this.bindListeners({
            
        });*/

        this.bindActions(CommonActionCreators);

        this.common = {};
    }

    setStore(data) {
        this.common = data;
    }
    
    
}

export default alt.createStore(CommonStore, 'CommonStore')
