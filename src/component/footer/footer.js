import React from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;

class FooterComponent extends React.Component{
    render(){
        return(
            <Footer style={{textAlign:'center'}} >
                eLearning ©2018 Created by ZhihaoJian, RaydonLiu, RenxunChen
            </Footer>
        )
    }
}

export default FooterComponent;