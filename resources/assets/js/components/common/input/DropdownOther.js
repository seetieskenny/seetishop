'use strict'

/**
 * Custom drop down input with other options
 * - component will re-render if value changed
 *
 * @params
 * # data       - dropdown list, :collection [{ id, name }]
 * # value      - input value
 * # valueOther - other input value
 * # placeholder - dropdown placeholder text
 * # otherMaxLength   - max character for other input
 * # otherText  - other text
 * # otherId    - other option ID
 * # otherPlaceholder - other input placeholder
 * # onChange   - triggered when drop down changed
 * # onTextChange - triggered when other input changed
 * # onError    - triggered when error occur
 */

import classNames from 'classnames'
import { trim } from 'lodash'

class DropdownOther extends React.Component {
    
    static propTypes = {
        data: React.PropTypes.array.isRequired,
        onChange: React.PropTypes.func,
        onTextChange: React.PropTypes.func,
        onError: React.PropTypes.func
    };

    static defaultProps = {
        value: '',
        valueOther: '',
        placeholder: 'Select',
        otherText: 'Other',
        otherId: 99,
        otherMaxLength: 50,
        otherPlaceholder: 'Other placeholder',
        onChange: () => {},
        onTextChange: () => {},
        onError: () => {}
    };

    constructor(props) {
        super();

        this.state = {
            isOther: props.value === props.otherId,
            isOtherErr: false
        };
    }

    render() {
        return (	
            <div className="DropdownOther">
                {this.renderSelectInput()}
                {this.renderOtherInput()}
            </div>
        )   
    }

    renderSelectInput() {
        const { data, value, placeholder, otherText, otherId } = this.props;

        // Inject placeholder & other options
        data.unshift({
            id: '',
            name: placeholder
        });

        data.push({
            id: otherId,
            name: otherText
        });

        return (
            <select className="input" value={value} onChange={this._onDropdownChange.bind(this)}>
                {data.map((obj, index) => 
                    <option value={obj.id} key={index}>{obj.name}</option>
                )}
            </select>
        )
    }

    renderOtherInput() {
        const { otherText, otherPlaceholder, valueOther } = this.props;
        const { isOther, isOtherErr } = this.state;

        if (!isOther) return;

        return (
            <div className="DropdownOther-option">
                <label htmlFor="DropdownOther_Input">{otherText}</label>
                <input type="text" id="DropdownOther_Input" 
                    className={classNames('input', {'is-error': isOtherErr})}
                    value={valueOther}  
                    placeholder={otherPlaceholder}
                    onChange={this._onTextChange.bind(this)}
                />
            </div>
        )
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

    _onDropdownChange(e) {
        const { otherId, onChange } = this.props;

        const val = parseInt(e.target.value);
        const isOther = val === otherId;

        this.updateState('isOther', isOther);

        // trigger event
        onChange(val);
    }

    _onTextChange(e) {
        const { onTextChange, onError, otherMaxLength } = this.props;

        const val = e.target.value;
        let isError = false;

        // validation
        if (trim(val).length > otherMaxLength) {
            isError = true;
            onError('other.length');
        }

        this.updateState('isOtherErr', isError);

        // trigger event
        onTextChange(val);
    }

}

export default DropdownOther
