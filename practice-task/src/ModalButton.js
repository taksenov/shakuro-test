import React, { Component } from 'react';
import Modal from './Modal';
import './ModalButton.css';

class ModalButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalShow: false
        };
        this.hideModal = this.hideModal.bind(this);
        this.showModal = this.showModal.bind(this);
    } // constructor

    static displayName = 'Modal Button';

    hideModal() {
        this.setState({
            isModalShow: false
        });
    } //hideModal

    showModal() {
        this.setState({
            isModalShow: true
        });
    } //showModal

    render() {
        return (
            <div>
                <button onClick={this.showModal}>Show modal window</button>
                {this.state.isModalShow === true && (
                    <Modal>
                        <div className="modal">
                            <div className="modal__fog">
                                <div className="modal__body">
                                    <h1>Модальное окно!</h1>
                                    <button onClick={this.hideModal}>
                                        Закрыть
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        );
    }
}

export default ModalButton;
