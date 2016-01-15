'use strict'

import 'react-datepicker/dist/react-datepicker.css'

import DatePicker from 'react-datepicker';

class FormStep2 extends React.Component {
    
    constructor(props) {
        super();

        this.state = {
            startDate: ''
        };
    }

    render() {
        return (
            <div className="FormStep2 box">
            	<div className="voucher-form-content pull-left">
                    <DatePicker
                        selected={this.state.startDate}
                        onChange={this.handleChange} />
                </div>
                <div className="voucher-form-tips pull-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam magna, fringilla in elementum quis, ultricies ut lacus. Fusce a dapibus nisi.</p>
                </div>
            </div>
        )   
    }

    handleChange() {

    }
}

export default FormStep2
