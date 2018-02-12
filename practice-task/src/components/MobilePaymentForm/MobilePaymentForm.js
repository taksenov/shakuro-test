import React, { Component } from 'react';
import {
    Image,
    Button,
    Form,
    Message,
    Label,
    Input,
    Icon
} from 'semantic-ui-react';

import MobilePaymentOperator from '../MobilePaymentOperator';

class MobilePaymentForm extends Component {
    render() {
        const { operator } = this.props;
        return (
            <div>
                <Form size="huge">
                    <Form.Field>
                        <h3>Выбран оператор</h3>
                    </Form.Field>
                    <Form.Field>
                        <MobilePaymentOperator
                            operator={{
                                icon: 'http://via.placeholder.com/64x64',
                                name: 'МТС',
                                index: 1
                            }}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Номер телефона</label>
                        <Input fluid label="+7" placeholder="(000)123-45-67" />
                        <Message
                            warning
                            header="Could you check something!"
                            list={[
                                'That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
                            ]}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Сумма</label>
                        <Input
                            fluid
                            labelPosition="right"
                            type="text"
                            placeholder="100"
                        >
                            <input />
                            <Label>
                                <Icon name="rub" size="large" />
                            </Label>
                        </Input>
                        <Message
                            warning
                            header="Could you check something!"
                            list={[
                                'That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
                            ]}
                        />
                    </Form.Field>

                    <Form.Checkbox label="Подтверждаю корректность введенных данных" />
                    <Button type="submit">Оплатить</Button>
                </Form>
            </div>
        );
    } //render
}

export default MobilePaymentForm;

// import React from 'react'
// import { Button, Form, Message } from 'semantic-ui-react'

// const FormExampleWarning = () => (
//   <Form warning>
//     <Form.Input label='Email' placeholder='joe@schmoe.com' />
//     <Message
//       warning
//       header='Could you check something!'
//       list={[
//         'That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.',
//       ]}
//     />
//     <Button>Submit</Button>
//   </Form>
// )

// export default FormExampleWarning

// ============================

// import React, { Component } from 'react'
// import { Form } from 'semantic-ui-react'

// class FormExampleClearOnSubmit extends Component {
//   state = {}

//   handleChange = (e, { name, value }) => this.setState({ [name]: value })

//   handleSubmit = () => this.setState({ email: '', name: '' })

//   render() {
//     const { name, email } = this.state

//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Form.Group>
//           <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
//           <Form.Input placeholder='Email' name='email' value={email} onChange={this.handleChange} />
//           <Form.Button content='Submit' />
//         </Form.Group>
//       </Form>
//     )
//   }
// }

// export default FormExampleClearOnSubmit

// ======================================

// import React from 'react'
// import { Input, Label } from 'semantic-ui-react'

// const InputExampleRightLeftLabeled = () => (
//   <Input labelPosition='right' type='text' placeholder='Amount'>
//     <Label basic>$</Label>
//     <input />
//     <Label>.00</Label>
//   </Input>
// )

// export default InputExampleRightLeftLabeled

//     <Input size='big' icon='search' placeholder='Search...' />

// ========================================
