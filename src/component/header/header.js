import React, { Component } from 'react';
import { Layout, Menu, Modal } from 'antd';
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
    return (
      <Header className="header">
        <div className='logo'>
          <h1><Link to='/'>eLearning</Link></h1>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          className='header-menu'
          onClick={({ item, key, keyPath }) => this.handleLoginModal(key)}
        >
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