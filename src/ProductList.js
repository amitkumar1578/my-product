import React, { Component } from 'react'
import { Modal, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { Card, Rate } from 'antd';
import { Popconfirm, message } from 'antd';
import { connect } from 'react-redux';
const text = 'Are you sure to delete this product?';
const { Option } = Select;
// const products = [{
//     name: 'camera',
//     rate: 4,
//     quality: 3
// }, {
//     name: 'mobile',
//     rate: 1,
//     quality: 2
// }, {
//     name: 'laptop',
//     rate: 2,
//     quality: 1
// }, {
//     name: 'bike',
//     rate: 5,
//     quality: 3
// }, {
//     name: 'guitar',
//     rate: 3,
//     quality: 3
// }];
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
const onFinish = values => {



};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true, deleteprdName: '' };
        this.showModal = this.showModal.bind(this)
    }



    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    };
    deleteProd = (name) => {
        this.setState({ deleteprdName: name })
    }
    confirm = () => {
        message.info('deleted');
        this.props.dispatch({ type: 'DELETE_PRODUCT', name: this.state.deleteprdName });
    }
    showModal = () => {

        this.setState({
            visible: true,
        });
    };
    success = () => {
        message.success('product added successfully');
    };
    onFinish = values => {
        console.log(values)
        let data = {
            name: values.productName,
            rate: values.productRate,
            quality: values.productQuality,
        }
        this.props.dispatch({
            type: 'ADD_PRODUCT',
            data
        });
        this.success();
        this.handleOk();

    };
    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 500);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };
    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
            <>
                <div style={{ margin: '10px' }}>
                    <Button type="primary" onClick={this.showModal}>
                        <PlusOutlined /> New Product
        </Button>
                </div>
                <div>

                    <Card title="Product List">

                        {this.props.products.map(prd => {
                            return <Card.Grid >
                                <p>
                                    <span>Product name -</span> <span>{prd.name}</span>
                                </p>
                                <p>
                                    <span>Product Rate -</span> <span><Rate disabled defaultValue={prd.rate} /></span>
                                </p>
                                <p>
                                    <span>Product Quality -</span><span>  {prd.quality}</span>
                                </p>
                                <Popconfirm
                                    placement="topRight"
                                    title={text}
                                    onConfirm={this.confirm}
                                    okText="Yes"
                                    cancelText="No"
                                >

                                    <Button type="danger" onClick={() => this.deleteProd(prd.name)}>
                                        <DeleteOutlined />
                                    </Button>
                                </Popconfirm>

                            </Card.Grid>
                        })}
                    </Card>

                </div>
                <Modal
                    destroyOnClose={true}
                    title="Add Product"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="productName"
                            name="productName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input  productName!',
                                },

                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="productRate"
                            name="productRate"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input  productRate!',
                                },


                            ]}
                        >
                            <Rate />
                        </Form.Item>
                        <Form.Item
                            name="productQuality"
                            label="productQuality"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select product Quality!',
                                },
                            ]}
                        >
                            <Select placeholder="Please select product Quality">
                                <Option value={1}>1</Option>
                                <Option value={2}>2</Option>
                                <Option value={3}>3</Option>
                            </Select>
                        </Form.Item>



                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Add Product
        </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        products: state
    }
}
export default connect(mapStateToProps)(ProductList);