import React, { Component } from 'react';
import CardNumberInput from '../MobilePaymentOperator';
import { connect } from 'react-redux';

import { operatorsRequest } from '../../actions/operatorsActions';

class MobilePaymentOperatorsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: ''
        };

        this.props.operatorsRequest();
        this.handleChange = this.handleChange.bind(this);
    } //constructor

    static displayName = 'Выбор оператора';

    handleChange(value) {
        this.setState({ cardNumber: value });
    } //handleChange

    render() {
        const { cardNumber } = this.state;
        const { operators } = this.props;

        console.log(operators);

        return (
            <CardNumberInput
                onChange={this.handleChange}
                cardNumber={cardNumber}
            />
        );
    }
}

const mapStateToProps = state => ({
    // isFetching: state.search.isFetching,
    operators: state.operators
});

const mapDispatchToProps = {
    operatorsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(
    MobilePaymentOperatorsGrid
);
