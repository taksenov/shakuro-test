import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChild: 0
        };

        this.handleChangeChild = this.handleChangeChild.bind(this);
    } //constructor

    handleChangeChild(e) {
        this.setState({
            selectedChild: +e.target.getAttribute('data-id')
        });
    } //handleChangeChild

    render() {
        const { selectedChild } = this.state;
        const { children } = this.props;

        return (
            <div>
                <nav>
                    <ul className="component-list">
                        {React.Children.map(children, (child, childIndex) => (
                            <li
                                className="component-list__name"
                                key={child.type.name}
                                data-id={childIndex}
                                onClick={this.handleChangeChild}
                            >
                                {child.type.displayName || child.type.name}
                            </li>
                        ))}
                    </ul>
                </nav>
                <hr />
                <div className="component-wrapper">
                    {React.Children.toArray(children)[selectedChild]}
                </div>
            </div>
        );
    }
}

export default Switcher;
