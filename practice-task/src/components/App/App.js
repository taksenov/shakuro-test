import React, { Component } from 'react';
import MobilePaymentOperatorsGrid from '../MobilePaymentOperatorsGrid';
import MobilePaymentForm from '../MobilePaymentForm';
import { Container, Tab, Message } from 'semantic-ui-react';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            paymentStepCondition: 0,
            needMessage: true
        };
    } //constructor

    handleTabChange = (e, { activeIndex }) => {
        if (activeIndex === this.state.paymentStepCondition) {
            this.setState({ activeIndex });
        } else {
            this.setState({ needMessage: false });
            console.log(
                'Условие для перехода на следующий шаг не выполнено',
                activeIndex,
                this.state.paymentStepCondition
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
                    const needMessage = this.state.needMessage;
                    return (
                        <Tab.Pane>
                            <MobilePaymentOperatorsGrid />
                            <Message hidden={needMessage} warning>
                                <Message.Header>Внимание!</Message.Header>
                                <p>
                                    Для перехода на следующий шаг необходимо
                                    выбрать оператора
                                </p>
                            </Message>
                        </Tab.Pane>
                    );
                }
            },
            {
                menuItem: 'Оплата',
                render: () => (
                    <Tab.Pane>
                        {' '}
                        //step 2
                        <MobilePaymentForm />
                    </Tab.Pane>
                )
            },
            {
                menuItem: 'Результат',
                render: () => (
                    <Tab.Pane>
                        {' '}
                        //step 3
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

export default App;
