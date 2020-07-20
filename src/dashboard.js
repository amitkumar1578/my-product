import React, { Component } from 'react'
import ProductList from './ProductList';
import { Layout } from 'antd';
import { Button ,Tooltip} from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { Redirect,  } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;
const user = JSON.parse(localStorage.getItem("result"));
export default class dashboard extends Component {
    constructor(props) {
        super(props);
       this.state={
        isLogout:false
       }
    }  
    logout=()=>{
    localStorage.clear();
        // this.setState({isLogout:true})
        window.location ='/';
    }
    render() {
        // if (this.state.isLogout) {
        //     return <Redirect to={{
        //         pathname: '/'  
        //     }}
        //     />
        // }
        return (
            <div>
                <Layout>
                    <Header>
                        <span style={{ float: 'left', color: '#FFF' }}>My-Product</span>
                        <div style={{ float: 'right', color: '#FFF' }}>
                        <span >Hello -@Clarion@clarion.com
                       
                       </span>
                       <span >
                       <Tooltip placement="bottom" title={"logout"}>
                       <Button
                               type="primary"
                               icon={<PoweroffOutlined />}
                               onClick={() => this.logout()}
                           />
                        </Tooltip>
                       
                           </span>
                        </div>
                       

                    </Header>
                    <Content>
<ProductList/>
                    </Content>

                </Layout>

            </div>
        )
    }
}
