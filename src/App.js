import React, { Component } from 'react'
import { Switch,Route,Redirect} from 'react-router-dom'

import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

import Qbang from './pages/Qbang'
import Weibo from './pages/Weibo'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MyNavLink activeClassName="select" to="/qbang">Q绑查询</MyNavLink>
        <MyNavLink activeClassName="select" to="/weibo">微博查询</MyNavLink>
        <Switch>
          {/* 注册路由 */}
          <Route path="/qbang" component={Qbang} />
          <Route path="/weibo" component={Weibo} />
          <Redirect to="/qbang" />
          {/* Redirect组件表示如果上面的路由都没有匹配上就去往我指定的to */}
        </Switch>
      </div>
    )
  }
}
