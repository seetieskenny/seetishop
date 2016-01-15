'use strict'

/**
 * Auto expanding input form outlet
 * - component will re-render if value changed
 *
 * @params
 * # data   - dropdown list key <> value object 
 * # val    - input value, :collection [{ id, val }]
 * # placeholder - default select text
 * # onAdd  - triggered when new value added, :collection [{ id, name }]
 * # onRemove - triggered when value removed
 * # onError - triggered when error occur
 */

import classNames from 'classnames'
import { map, filter, find, trim } from 'lodash'

class OutletAmountInput extends React.Component {
    
    static propTypes = {
        data: React.PropTypes.array.isRequired,
        value: React.PropTypes.array,
        placeholder: React.PropTypes.string,
        onAdd: React.PropTypes.func,
        onRemove: React.PropTypes.func,
        onError: React.PropTypes.func
    };

    static defaultProps = {
        placeholder: 'Select Outlet',
        value: [],
        onAdd: () => {},
        onRemove: () => {},
        onError: () => {}
    };

    constructor(props) {
        super();

        this.state = {
            inputId: "",
            inputVal: "",
            isInputIdErr: false,
            isInputValErr: false
        };
    }

    render() {
        return (	
            <div className="OutletAmountInput">
                {this.renderSelectedInput()}
            	{this.renderAddNewInput()}
            </div>
        )   
    }

    renderSelectedInput() {
        const { data, value } = this.props;

        return (
            <div className="input-autoexpand-list">
                {value.map((obj, index) =>
                    <div className="input-autoexpand" key={index}>
                        <span className="input-autoexpand-text">{find(data, { id: obj.id }).name}</span>
                        <span className="input-autoexpand-val">{obj.val}</span>
                        <button type="button" className="btn btn-info" onClick={this._onRemove.bind(this, obj.id)}>Remove</button>
                    </div>
                )}
            </div>
        )
    }

    renderAddNewInput() {
        const { data, value, placeholder } = this.props;
        const { inputId, inputVal, isInputIdErr, isInputValErr } = this.state;

        // filter out selected val
        const selectedIds = map(value, 'id');
        const filteredData = data.filter(d => {
            return selectedIds.indexOf(d.id) < 0;
        });

        return (
            <div className="input-autoexpand input-autoexpand-new">
                <select value={inputId} 
                    className={classNames("form-control", {'is-error': isInputIdErr})} 
                    onChange={this._onChangeInputId.bind(this)}>
                    <option>{placeholder}</option>
                    {filteredData.map((obj, index) => 
                        <option 
                            key={index} 
                            value={obj.id}>
                            {obj.name}
                        </option>
                    )}
                </select>
                <input type="text" 
                    className={classNames("form-control", {'is-error': isInputValErr})} 
                    value={inputVal} 
                    onChange={this._onChangeInputVal.bind(this)} 
                />
                <button type="button" className="btn btn-info" onClick={this._onAddNew.bind(this)}>Add</button>
            </div>
        )
    }

    validation(id, val) {
        let isError = false;

        id = parseInt(id);
        val = parseFloat(val);

        if (isNaN(id)) {
            isError = 'input.empty';
            this.updateState('isInputIdErr', true);
        }
        else if (isNaN(val)) {
            isError = 'value.invalid';
            this.updateState('isInputValErr', true);
        }

        return isError;
    }

    // this method used to update state only if value not same as current state
    // prevent re-render called (can use shouldComponentUpdate method but required a lot of checks)
    updateState(state, val) {
        if (this.state[ state ] !== val) {
            const temp = {};
            temp[ state ] = val;
            this.setState(temp);
        }
    }

    _onChangeInputId(e) {
        this.setState({ inputId: trim(e.target.value) });
    }

    _onChangeInputVal(e) {
        this.setState({ inputVal: trim(e.target.value) });
    }

    _onAddNew(e) {
        e.preventDefault();

        const { inputId, inputVal } = this.state;

        const isError = this.validation(inputId, inputVal);

        // trigger event
        if (isError) {
            const { onError } = this.props;
            onError(isError);
            return;
        }

        // reset input
        this.setState({
            inputId: '',
            inputVal: '',
            isInputIdErr: false,
            isInputValErr: false
        });

        // trigger event
        const { onAdd } = this.props;
        onAdd({
            id: parseInt(inputId),
            val: inputVal
        });
    }

    _onRemove(id, e) {
        e.preventDefault();

        // trigger event
        const { onRemove } = this.props;
        onRemove(id);
    }

}

export default OutletAmountInput
