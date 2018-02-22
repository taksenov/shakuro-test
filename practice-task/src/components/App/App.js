import React, { Component } from 'react';
import MobilePaymentOperatorsGrid from '../MobilePaymentOperatorsGrid';
import { connect } from 'react-redux';
import MobilePaymentForm from '../MobilePaymentForm';
import { Container, Tab, Message } from 'semantic-ui-react';

import { operatorSelected } from '../../actions/selectedOperatorActions';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            paymentStepCondition: 0,
            hideMessage: true
        };
    } //constructor

    componentWillReceiveProps = nextProps => {
        console.log('cwr nextProps', nextProps);
        console.log('activeIndex', this.state.activeIndex + 1);
        if (
            nextProps.selectedOperator.operator.index &&
            this.state.activeIndex <= 0
        ) {
            this.setState({
                hideMessage: true,
                activeIndex: this.state.activeIndex + 1
            });
        }
    };

    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('this-state', this.state);
        console.log('nextState', nextState);
        if (
            this.state.activeIndex <= nextState.activeIndex &&
            this.state.activeIndex === 0
        ) {
            console.log('return true');
            return true;
        }
        if (nextState.activeIndex === 0) {
            console.log('return true');
            return true;
        }
        console.log('return false');
        return false;
    };

    handleTabChange = (e, { activeIndex }) => {
        // console.log('operator-----');
        // console.log(this.props.selectedOperator.operator.index);
        // console.log('operator-----');

        if (this.props.selectedOperator.operator.index) {
            this.setState({
                activeIndex: activeIndex,
                hideMessage: true
            });
        } else {
            this.setState({ hideMessage: false });
            console.log(
                'Условие для перехода на следующий шаг не выполнено',
                activeIndex,
                this.state.paymentStepCondition,
                this.state.hideMessage
            );
        }
    }; //handleTabChange

    render() {
        const { activeIndex } = this.state;

        const panes = [
            //step 1
            {
                menuItem: 'Выбор оператора',
                render: () => {
                    const hideMessage = this.state.hideMessage;
                    return (
                        <Tab.Pane>
                            <MobilePaymentOperatorsGrid />
                            <Message hidden={hideMessage} warning>
                                <Message.Header>Внимание!</Message.Header>
                                <p>
                                    Для совершения оплаты необходимо выбрать
                                    оператора
                                </p>
                            </Message>
                        </Tab.Pane>
                    );
                }
            },
            {
                //step 2
                menuItem: 'Оплата',
                render: () => (
                    <Tab.Pane>
                        <MobilePaymentForm />
                    </Tab.Pane>
                )
            },
            {
                //step 3
                menuItem: 'Результат',
                render: () => (
                    <Tab.Pane>
                        <MobilePaymentOperatorsGrid />
                    </Tab.Pane>
                )
            }
        ];

        const MenuTabs = () => (
            <Tab
                panes={panes}
                activeIndex={activeIndex}
                onTabChange={this.handleTabChange}
            />
        );

        return (
            <div>
                <Container>
                    <MenuTabs />
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    selectedOperator: state.operatorSelected
});

const mapDispatchToProps = {
    operatorSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
