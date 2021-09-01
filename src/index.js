import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import 'antd/dist/antd.css'

//需要用BrowserRouter包裹 路由和路由链接
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
,
document.getElementById("root"))