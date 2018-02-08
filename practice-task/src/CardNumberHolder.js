import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: ''
        };

        this.handleChange = this.handleChange.bind(this);
    } //constructor

    static displayName = 'Card number holder';

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

export default CardNumberHolder;
