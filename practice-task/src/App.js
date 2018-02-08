import React, { Component } from 'react';
import Switcher from './components/MobilePaymentContainer';
import CardNumberHolder from './components/MobilePaymentOperatorsGrid/MobilePaymentOperatorsGrid';
import ModalButton from './ModalButton';

import './App.css';

class App extends Component {
    render() {
        return (
            <Switcher>
                <CardNumberHolder />
                <ModalButton />
            </Switcher>
        );
    }
}

export default App;
