import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import  MyNavLink from '../../components/MyNavLink'
import Mobtourl from './Mobtourl'
import Urltomob from './Urltomob'

export default class Weibo extends Component {
    render() {
        return (
            <div>
            <MyNavLink activeClassName="select2" to="/weibo/urltomob">链接查手机号</MyNavLink>
            <MyNavLink activeClassName="select2" to="/weibo/mobtourl">手机号反查微博</MyNavLink>

            <Switch>
                {/* 注册路由 */}
                <Route path="/weibo/urltomob" component={Urltomob} />
                <Route path="/weibo/mobtourl" component={Mobtourl} />
                <Redirect to="/weibo/urltomob" />
                {/* Redirect组件表示如果上面的路由都没有匹配上就去往我指定的to */}
            </Switch>
            </div>
        )
    }
}
