'use strict';

import alt from '../utils/alt'
import { assign } from 'lodash'

class CommonActionCreators {
    
    setStore(data) {
        return data;
    }

}

export default alt.createActions(CommonActionCreators)
