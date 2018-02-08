import React, { Component } from 'react';

class MobilePaymentOperator extends Component {
    constructor(props) {
        super(props);

        const { cardNumber } = this.props;
        this.state = { number: this.format(cardNumber) };

        this.format = this.format.bind(this);
        this.normalize = this.normalize.bind(this);
        this.handleChange = this.handleChange.bind(this);
    } //constructor

    componentWillReceiveProps(nextProps) {
        this.setState({ number: this.format(nextProps.cardNumber) });
    } //componentWillReceiveProps

    // format(normalizeString) {
    //     if (!normalizeString) return '';

    //     let tempString = normalizeString;
    //     tempString = tempString + '';
    //     tempString = tempString.trim();

    //     let formatString = '';
    //     let formatSymbol = ' '; //spaceBar
    //     let formatNumberGroupsOfSymbols = 4;
    //     let steps = tempString.length / formatNumberGroupsOfSymbols;
    //     let remainderOfDivision =
    //         tempString.length % formatNumberGroupsOfSymbols;

    //     if (tempString.length < formatNumberGroupsOfSymbols) {
    //         return (formatString = tempString);
    //     }
    //     for (let i = 0; i < parseInt(steps, 10); i++) {
    //         formatString =
    //             formatString +
    //             formatSymbol +
    //             tempString.slice(
    //                 i * formatNumberGroupsOfSymbols,
    //                 i * formatNumberGroupsOfSymbols +
    //                     formatNumberGroupsOfSymbols
    //             );
    //     }
    //     formatString = formatString.trim();
    //     if (remainderOfDivision !== 0) {
    //         formatString =
    //             formatString +
    //             formatSymbol +
    //             tempString.slice(-remainderOfDivision);
    //     }

    //     return formatString;
    // } //format

    format = number => {
        if (number) {
            var str = Number.isInteger(number) ? String(number) : number;
            return Array.from(str)
                .map(function(c, n) {
                    return n % 4 || 0 === n ? c : ' ' + c;
                })
                .join('');
        } else return '';
    };

    normalize(number) {
        return number.replace(/\s+/g, '');
    } //normalize

    handleChange(e) {
        this.props.onChange(this.normalize(e.target.value));
    } //handleChange

    render() {
        const { number } = this.state;
        return (
            <input type="text" onChange={this.handleChange} value={number} />
        );
    } //render
}

export default MobilePaymentOperator;
