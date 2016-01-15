'use strict'

import OutletAmountInput from './input/OutletAmountInput'
import DropdownOther from '../common/input/DropdownOther'
import { remove } from 'lodash'

class FormStep1 extends React.Component {
    
    static propTypes = {
    	onNext: React.PropTypes.func
    };

    static defaultProps = {
        onNext: () => {}
    };

	constructor(props) {
		super();

		this.state = {
			outlets: [],
			categoryVal: '',
			categoryOtherVal: ''
		};
	}

    render() {
    	const { onNext } = this.props;
    	const { outlets, categoryVal, categoryOtherVal } = this.state;

        return (	
            <div className="FormStep1 box">
            	<div className="voucher-form-content pull-left">
            		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam magna, fringilla in elementum quis, ultricies ut lacus. Fusce a dapibus nisi.</p>

            		<div className="input-group">
            			<OutletAmountInput 
            				value={outlets}
            				data={this.generateOutlets()}
            				onAdd={this._onOutletAdd.bind(this)}
            				onRemove={this._onOutletRemove.bind(this)}
            				onError={this._onError.bind(this, 'outlets')}
            			/>
            		</div>

            		<div className="input-group">
            			<label>Deals Category</label>
            			<DropdownOther 
            				value={categoryVal}
            				valueOther={categoryOtherVal}
            				data={this.generateOutlets()}
            				onChange={this._onCategoryChange.bind(this)}
            				onTextChange={this._onCategoryOtherChange.bind(this)}
            				onError={this._onError.bind(this, 'category')}
            			/>
            		</div>

            		<div className="input-group voucher-form-content-action clearfix">
            			<button type="button" className="btn btn-info pull-right" onClick={onNext}>Next</button>
            		</div>

            	</div>
            	<div className="voucher-form-tips pull-right">
            		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam magna, fringilla in elementum quis, ultricies ut lacus. Fusce a dapibus nisi.</p>
            	</div>
            </div>
        )   
    }


    /**
     * Self methods
     */
    generateOutlets() {
    	return [
    		{
    			id: 1,
    			name: 'Rekindle SS1'
    		},
    		{
    			id: 2,
    			name: 'Rekindle SS2'
    		},
    		{
    			id: 3,
    			name: 'Rekindle SS3'
    		},
    		{
    			id: 4,
    			name: 'Rekindle SS4'
    		},
    		{
    			id: 5,
    			name: 'Rekindle SS5'
    		},
    	]
    }

    generateCategory() {
    	return [
    		{
    			id: 1
    		}
    	]
    }


    /**
     * Events handle
     */
    _onOutletAdd(obj) {
    	const { outlets } = this.state;

    	outlets.push(obj);
    	this.setState({ outlets: outlets });
    }

    _onOutletRemove(id) {
    	const { outlets } = this.state;

    	remove(outlets, o => {
    		return o.id === id
    	});
    	this.setState({ outlets: outlets });
    }

    _onCategoryChange(id) {
    	this.setState({ categoryVal: id });
    }

    _onCategoryOtherChange(val) {
    	this.setState({ categoryOtherVal: val });
    }

    _onError(type, msg) {
    	console.log(msg);
    }
}

export default FormStep1
