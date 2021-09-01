import React, { Component } from 'react'
import Pubsub from 'pubsub-js'


export default class result extends Component {

    state = { //初始化状态
		users:{}, //链接初始值为空
		isFirst:true, //是否为第一次打开页面
		isLoading:false,//标识是否处于加载中
		err:'',//存储请求相关的错误信息
	} 

    componentDidMount(){    //组件挂载
        this.token = Pubsub.subscribe('changemobstate',(msg,stateobj)=>{    //订阅
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
                    isFirst ? <h2>偷偷去看老女人的照片呐~</h2> : 
                    isLoading ? <h2>搜索中，请等待...</h2> :
                    err? <h2 style={{color:'red'}}>{err} </h2>:
                    users.msg?<h2 style={{color:'red'}}>{users.msg} </h2>:
                    <h3>找到啦！→ <a href={users.url}>{users.url}</a> ←可复制该链接自行搜索</h3>   
                }
            </div>
        )
    }
}
