import React, { Component } from 'react';
import MobilePaymentOperatorsGrid from '../MobilePaymentOperatorsGrid';
import MobilePaymentForm from '../MobilePaymentForm';
import { Container, Tab } from 'semantic-ui-react';

import './App.css';

class App extends Component {
    render() {
        const panes = [
            //step 1
            {
                menuItem: 'Выбор оператора',
                render: () => (
                    <Tab.Pane>
                        <MobilePaymentOperatorsGrid />
                    </Tab.Pane>
                )
            },

            //step 2
            {
                menuItem: 'Оплата',
                render: () => (
                    <Tab.Pane>
                        <MobilePaymentForm />
                    </Tab.Pane>
                )
            },

            //step 3
            {
                menuItem: 'Результат',
                render: () => (
                    <Tab.Pane>
                        <MobilePaymentOperatorsGrid />
                    </Tab.Pane>
                )
            }
        ];

        const MenuTabs = () => <Tab panes={panes} />;

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
