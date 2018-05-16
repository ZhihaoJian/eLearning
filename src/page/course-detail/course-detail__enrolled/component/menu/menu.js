import React from 'react';
import {Menu} from 'antd';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';

@withRouter
class MenuComponent extends React.Component{
    handleClick = (e) => {
        this.props.handleMenuChange(e.key);
    }

    render(){
        const menu = this.props.match.params.menu;
        return(
            <Menu
                className='menu-tab'
                onClick={this.handleClick}
                selectedKeys={[menu]}
                mode="horizontal"
            >
                <Menu.Item key="overview">
                    <Link to='/course-detail/enroll/1/overview'>Overview</Link>
                </Menu.Item>
                <Menu.Item key="content" >
                    <Link to='/course-detail/enroll/1/content'>Course Content</Link>
                </Menu.Item>
                <Menu.Item key="questions">
                    <Link to='/course-detail/enroll/1/questions'>Q & A</Link>
                </Menu.Item>
                <Menu.Item key="announcement">
                    <Link to='/course-detail/enroll/1/announcement'>Announcement</Link>
                </Menu.Item>
            </Menu>
        )
    }
}

MenuComponent.propTypes = {
    current:PropTypes.string.isRequired,
    handleMenuChange:PropTypes.func.isRequired
}

export default MenuComponent;