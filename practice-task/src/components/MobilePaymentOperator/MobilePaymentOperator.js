import React, { Component } from 'react';
import { Image, Label } from 'semantic-ui-react';

class MobilePaymentOperator extends Component {
    render() {
        const { operator } = this.props;
        return (
            <Label as="a">
                <Image
                    avatar
                    size="massive"
                    spaced="right"
                    src={operator.icon}
                />
                {operator.name}
            </Label>
        );
    } //render
}

export default MobilePaymentOperator;
