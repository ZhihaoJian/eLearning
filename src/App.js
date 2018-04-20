import React, { Component } from 'react';
import { Layout } from 'antd';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createStore,compose,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {appReducer} from './redux/app.redux'; 
import HeaderComponent from './component/header/header';
import FooterComponent from './component/footer/footer';
import IndexPage from './page/index/index';
import Register from './page/register/register';
import CourseDetailRouter from './page/course-detail/route';

const reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : () => { };
const store = createStore(appReducer,compose(applyMiddleware(thunk), reduxDevTools));

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <Layout className='layout-container' >
            <HeaderComponent/>
            <Switch>
              <Route exact path='/' component={IndexPage} />
              <Route path='/register' component={Register} />
              <Route path='/course-detail' component={CourseDetailRouter} />
            </Switch>
            <FooterComponent/>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;