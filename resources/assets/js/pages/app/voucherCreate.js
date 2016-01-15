'use strict';

import FormNav from '../../components/voucher/FormNav';
import FormStep1 from '../../components/voucher/FormStep1';
import FormStep2 from '../../components/voucher/FormStep2';


const FORMINFO = {
    STEP1 : {
        ID      : 1,
        TITLE   : 'Step 1 : Outlet & Category'
    },
    STEP2 : {
        ID      : 2,
        TITLE   : 'Step 2 : Outlet & Category'
    },
    STEP3 : {
        ID      : 3,
        TITLE   : 'Step 3 : Outlet & Category'
    }
}

class VoucherCreate extends React.Component {

    constructor(props) {
        super();

        document.title = 'Create Voucher';

        this.state = {
            currentStep     : FORMINFO.STEP1.ID,
            disableNext     : false
        };
    }

    componentDidMount() {
    	// Load data from store
    }

    componentWillUnmount() {
        // Clear store data
    }

    render() {
        const { currentStep, disableNext } = this.state;

        return (
            <div className="page-voucher page">
            	<div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <FormNav
                                disableNav={disableNext}
                                onChange={this._onNavChange.bind(this)} 
                            />
                        </div>

                        <div className="col-md-9">
                            <div className="voucher-form">
                                <div className="voucher-form-header clearfix">
                                    <h1 className="pull-left">{this.getCurrentForm().title}</h1>
                                    <div className="voucher-form-header-action">
                                        <button type="button" className="btn btn-info">Save Draft</button>
                                    </div>
                                </div>
                                    
                                <div className="voucher-form-body">
                                    {this.getCurrentForm().content}
                                </div>
                            </div>
                        </div>
                    </div>
	            </div>
            </div>
        )   
    }


    /**
     * Self methods
     */
    getCurrentForm() {
        const { currentStep } = this.state;

        const formInfo = FORMINFO[ 'STEP'+currentStep ] || FORMINFO.STEP1;

        let content;
        if (formInfo.ID === FORMINFO.STEP3.ID) {
            content = <FormStep2 />;
        }
        else if (formInfo.ID === FORMINFO.STEP2.ID) {
            content = <FormStep2 />;
        }
        else {
            content = <FormStep1 onNext={this._onNavChange.bind(this, FORMINFO.STEP2.ID)} />;
        }

        return {
            id: formInfo.ID,
            title: formInfo.TITLE,
            content: content
        }
    }


    /**
     * Events handler
     */
    _onNavChange(index) {
        const { disableNext } = this.state;
        if (disableNext) return;

        this.setState({ currentStep: index });
    }
}

export default VoucherCreate
