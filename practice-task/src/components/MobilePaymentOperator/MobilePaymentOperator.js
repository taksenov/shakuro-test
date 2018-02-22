import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Label } from 'semantic-ui-react';

import { operatorSelected } from '../../actions/selectedOperatorActions';

class MobilePaymentOperator extends Component {
    handleOperatorSelect = () => {
        // console.log('click on operator');
        // const { onSelectedOperatorClick } = this.props;
        this.props.operatorSelected(this.props.operator);
        // onSelectedOperatorClick(this.props.operator);
    }; //handleOperatorSelect

    // handleChangeForm(event) {
    //     const { onChangeForm } = this.props;
    //     onChangeForm(event.target.name, event.target.value);
    // } //handleChangeForm

    render() {
        const { operator } = this.props;
        return (
            <Label onClick={this.handleOperatorSelect} as="a">
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

const mapStateToProps = state => ({
    operatorSelected: state.operatorSelected
});

const mapDispatchToProps = {
    operatorSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(
    MobilePaymentOperator
);
