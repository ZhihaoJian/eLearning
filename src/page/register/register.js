import React from 'react';
import { Form, Input, Select, Button, Tooltip, Icon, Layout } from 'antd';
import './index.css';
import { connect } from 'react-redux';
import { register } from '../../redux/index.redux';
const FormItem = Form.Item;
const Option = Select.Option;
const { Content } = Layout;


@connect(
    state => state.interactReducer,
    { register }
)
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
        }
    }

    componentDidMount() {
        document.title = 'Register - eLearning';
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            // else{
            //     this.props.register(values);
            // }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Inconsistent password input twice！');
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }


    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 12 },
                sm: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 6 },
                sm: { span: 4 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 12,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 10,
                },
            },
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 80 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        return (
            <Content>
                <Form onSubmit={this.handleSubmit} className='register-form' >
                    <FormItem
                        {...formItemLayout}
                        label="email"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'Email is illegal!',
                            }, {
                                required: true, message: 'Please enter your email address!',
                            }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="password"
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'please enter your password!',
                            }, {
                                validator: this.validateToNextPassword,
                            }],
                        })(
                            <Input type="password" />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="confirm password"
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: 'Please enter your confirmation password!',
                            }, {
                                validator: this.compareToFirstPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
                                nickname&nbsp;
                            <Tooltip title="How do other people call you?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        )}
                    >
                        {getFieldDecorator('nickname', {
                            rules: [{ required: true, message: 'Please enter your nickname', whitespace: true }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="phone"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please enter your mobile number' }],
                        })(
                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                        )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType='submit' >Register</Button>
                    </FormItem>
                </Form>
            </Content>
        )
    }
}

export default Register = Form.create()(Register);