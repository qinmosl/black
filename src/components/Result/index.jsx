import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import { Spin, Space } from 'antd';


export default class result extends Component {

    state = { //初始化状态
		users:{}, //users初始值为空对象
		isFirst:true, //是否为第一次打开页面
		isLoading:false,//标识是否处于加载中
		err:'',//存储请求相关的错误信息
	} 

    componentDidMount(){    //组件挂载
        this.token = Pubsub.subscribe('changestate',(msg,stateobj)=>{    //订阅
            // console.log(msg)    //changestate
            this.setState(stateobj)
        })
    }

    componentWillUnmount(){     //组件卸载前
        Pubsub.unsubscribe(this.token)  //关闭订阅
	}

    render() {
        const {isFirst,isLoading,err,users} = this.state  
        return (
            <div>
                {
                    isFirst ? <h2>脚本小子，不怕被抓</h2> : 
                    isLoading ? 
                    // style {{}}原因找到了： 可以看Header组件源码  {}代表写js  js里面是写对象，对象是{}
                    <Space size="middle" style={{margin:'0 auto'}}>
                        <Spin size="large" tip="宝￠请稍等哦"/>
                    </Space>:
                    err? <h2 style={{color:'red'}}>{err} </h2>:
                    users.msg?<h2 style={{color:'red'}}>{users.msg} </h2>:
                    <div>
                        <h3>手机号：{users.mobile}  {users.sp}</h3>
                        <h3>归属地: {users.province} {users.city}</h3>
                    </div>
                    
                }
            </div>
        )
    }
}
