import React, { Component } from 'react';
import CardNumberInput from '../MobilePaymentOperator';
//1. Выбор оператора
class MobilePaymentOperatorsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: ''
        };

        this.handleChange = this.handleChange.bind(this);
    } //constructor

    static displayName = 'Выбор оператора';

    handleChange(value) {
        this.setState({ cardNumber: value });
    } //handleChange

    render() {
        const { cardNumber } = this.state;
        return (
            <CardNumberInput
                onChange={this.handleChange}
                cardNumber={cardNumber}
            />
        );
    }
}

export default MobilePaymentOperatorsGrid;
