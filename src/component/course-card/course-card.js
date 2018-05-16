import React from 'react';
import {withRouter} from 'react-router-dom';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

@withRouter
class CourseCardComponent extends React.Component{

    handleClick(){
        this.props.history.push('/course-detail/enroll/1');
    }

    render(){
        return(
            <Card
                onClick={this.handleClick.bind(this)}
                style={{ width: 300 }}
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
                <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
                />
            </Card>
        )
    }
}

export default CourseCardComponent;