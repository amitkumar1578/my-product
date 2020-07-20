import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { message, Space } from 'antd';

const credential = {
    username: "Clarion@clarion.com",
    userPassword: "Clarion123",
}
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const success = () => {

    message.success('authentication successfully');

};
const error = () => {
    message.error('please provide correct credential');
};

const login = () => {

    const onFinish = values => {

        if (values.Email === credential.username && values.password === credential.userPassword) {
            success();
            localStorage.setItem('logedIn', true);
            setTimeout(function () {
                window.location = '/dashboard'
            }, 500
            );

        }
        else {
            error();
        }

    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Row style={{ align: "center" }}>
                <Col span={4}></Col>
                <Col span={16}>
                    <div style={{ textAlign: 'center' }}><h1>Login Form</h1></div>

                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email! Ex-Clarion@clarion.com',
                                },
                                {
                                    type: 'email',
                                    message: 'Please input correct Email'
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password! Ex-Clarion123',
                                },
                                {
                                    min: 6,
                                    message: 'Please fill atleast 6 character'
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>



                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Login
        </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={4}></Col>
            </Row>

        </div>

    );
};

export default login;
