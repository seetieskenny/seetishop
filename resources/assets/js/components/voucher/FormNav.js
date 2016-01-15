'use strict'

import classNames from 'classnames';

class FormNav extends React.Component {
    
    static propTypes = {
        currentNav: React.PropTypes.number,
        onChange: React.PropTypes.func,
        disableNav: React.PropTypes.bool
    };

    static defaultProps = {
        currentNav: 1,
        disableNav: false,
        onChange: () => {}
    };

    constructor(props) {
        super();

        this.state = {
            currentNav: props.currentNav
        };
    }

    render() {
        const { disableNav } = this.props;
        const { currentNav } = this.state;

        return (
            <nav className="FormNav voucher-form-nav">
                <h4 className="voucher-form-nav-title">Add new voucher</h4>
                <ul className="list-unstyled">
                    <li className={classNames({
                        active  : currentNav === 1
                    })}>
                        <a href="#" onClick={this._onNavChange.bind(this, 1)}>Step 1</a>
                    </li>
                    <li className={classNames({
                        active  : currentNav === 2,
                        disable : disableNav
                    })}>
                        <a href="#" onClick={this._onNavChange.bind(this, 2)}>Step 2</a>
                    </li>
                    <li className={classNames({
                        active  : currentNav === 3,
                        disable : disableNav
                    })}>
                        <a href="#" onClick={this._onNavChange.bind(this, 3)}>Step 3</a>
                    </li>
                </ul>
            </nav>
        )   
    }


    /**
     * Events handler
     */
    _onNavChange(index, e) {
        e.preventDefault();

        const { disableNav, onChange } = this.props;
        if (disableNav) return;

        this.setState({ currentNav: index });

        // trigger events
        onChange(index);
    }
}

export default FormNav
