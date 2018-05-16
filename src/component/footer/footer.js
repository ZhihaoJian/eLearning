import React from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;

class FooterComponent extends React.Component{
    render(){
        const style = {
            'borderTop':'6px solid #ec5252',
            'textAlign':'center',
            'marginTop':'30px'
        }
        return(
            <Footer style={style} >
                eLearning ©2018 Created by ZhihaoJian, RaydonLiu, RenxunChen
            </Footer>
        )
    }
}

export default FooterComponent;