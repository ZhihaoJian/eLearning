import React, { Component } from 'react';
import { Layout, Menu, Modal, Dropdown, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import LoginComponent from '../login/login';
import './header.css';
const { Header } = Layout;

@withRouter
class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  handleLoginModal(key) {
    if (key === 'login') {
      this.setState({
        visible: true
      })
    } else {
      this.props.history.push('/register');
    }
  }

  render() {

    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">Chinese</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">English</a>
        </Menu.Item>
      </Menu>
    );


    return (
      <Header className="header">
        <div className='logo' onClick={() => this.props.history.push('/')} ></div>
        <Menu
          theme="light"
          mode="horizontal"
          className='header-menu'
          onClick={({ item, key, keyPath }) => this.handleLoginModal(key)}
        >
          <Menu.Item>
            <Dropdown overlay={menu} >
              <a className="ant-dropdown-link" href="#">
                Lang <Icon type="down" />
              </a>
            </Dropdown>
          </Menu.Item>
          <Menu.Item key="register">Register</Menu.Item>
          <Menu.Item key="login">Login</Menu.Item>
        </Menu>
        <Modal
          visible={this.state.visible}
          title="Login"
          okText='Confirm'
          destroyOnClose={true}
          footer={null}
          onCancel={() => this.setState({ visible: false })}
        >
          <LoginComponent />
        </Modal>
      </Header>
    );
  }
}

export default HeaderComponent;