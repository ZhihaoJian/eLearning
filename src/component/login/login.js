import React from 'react';
import { Form, Icon, Checkbox, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../redux/index.redux';
import './index.css';
const FormItem = Form.Item;

@connect(
    state => state.interactReducer,
    { login }
)
class LoginComponent extends React.Component {

    handleSubmit() {
        const data = this.props.form.getFieldsValue();
        this.props.login(data);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your user name' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="username" style={{ height: 50 }} />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="password" style={{ height: 50 }} />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forget password</a>
                    <Button type="primary" style={{ height: 40 }} onClick={this.handleSubmit.bind(this)} className="login-form-button">
                        Login
                </Button>
                    or <a href="">Register now</a>
                </FormItem>
            </Form>
        )
    }
}


export default LoginComponent = Form.create()(LoginComponent);