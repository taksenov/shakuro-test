import React, { Component } from 'react';
import { Container, Menu, Tab } from 'semantic-ui-react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class MobilePaymentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedChild: 0, activeItem: 'Выбор оператора' };

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
        const { activeItem } = this.state;

        const panes = [
            {
                menuItem: 'Tab 1',
                render: () => <Tab.Pane loading>Tab 1 Content</Tab.Pane>
            },
            {
                menuItem: 'Tab 2',
                render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
            },
            {
                menuItem: 'Tab 3',
                render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
            }
        ];

        const TabExampleLoading = () => <Tab panes={panes} />;

        return (
            <div>
                <Container>
                    <TabExampleLoading />

                    <Menu pointing secondary>
                        {React.Children.map(children, (child, childIndex) => (
                            <Menu.Item
                                name={child.type.displayName || child.type.name}
                                active={
                                    activeItem ===
                                    (child.type.displayName || child.type.name)
                                }
                                key={child.type.name}
                                data-id={childIndex}
                                onClick={this.handleChangeChild}
                            />
                        ))}
                    </Menu>
                    <hr />
                    <div className="component-wrapper">
                        {React.Children.toArray(children)[selectedChild]}
                    </div>
                </Container>
            </div>
        );
    }
}

export default MobilePaymentContainer;

// import { Tab } from 'semantic-ui-react'

// const panes = [
//   { menuItem: 'Tab 1', render: () => <Tab.Pane loading>Tab 1 Content</Tab.Pane> },
//   { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
//   { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
// ]

// const TabExampleLoading = () => (
//   <Tab panes={panes} />
// )

// export default TabExampleLoading
