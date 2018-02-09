import React, { Component } from 'react';
import MobilePaymentOperatorsGrid from '../MobilePaymentOperatorsGrid';
import { Container, Tab } from 'semantic-ui-react';

import './App.css';

class App extends Component {
    render() {
        const panes = [
            {
                menuItem: 'Выбор оператора',
                render: () => (
                    <Tab.Pane>
                        <MobilePaymentOperatorsGrid />
                    </Tab.Pane>
                )
            },
            {
                menuItem: 'Оплата',
                render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
            },
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
    // }
}

export default App;
