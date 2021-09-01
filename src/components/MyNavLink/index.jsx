import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        return (
            //靠路由链接切换组件    activeClassName属性为：当选中时，className附加一个select
            // <NavLink activeClassName="select"  className="list-group-item" {...this.props}></NavLink>
            //{...this.props}直接把props的东西全部拆解出来，并且，他有个属性children 就是在标签体的内容，children="" 和写在标签中间一样
            <NavLink  className="list-group-item" {...this.props}></NavLink>    //activeClassName="select" 因为两层我要用不同颜色，我就不能在这里写
        )
    }
}
