import React, { Component } from 'react'
import axios from 'axios'
import Pubsub from 'pubsub-js'  //消息订阅发布

export default class SearchMob extends Component {

    search = () => {

        const { keyWordElement: { value: keyWord } } = this

        //发布消息 
        Pubsub.publish('changemobstate', { isFirst: false, isLoading: true })

        //发送网络请求
        axios.get(`https://sgk.xyz/wbfc-api.php?mobile=${keyWord}`).then(  //Q绑
            response => {
                // console.log(response)
                if (response.data.msg === 'ok') {
                    let url = 'https://weibo.com/u/' + response.data.data.uid
                    let user = {}
                    user.url = url
                    //发布消息 使订阅更新其state
                    Pubsub.publish('changemobstate', { isLoading: false, users: user })
                } else {
                    let user = {}
                    user.msg = response.data.msg
                    Pubsub.publish('changemobstate', { isLoading: false, users: user })
                }
            },
            error => {
                //发布消息
                Pubsub.publish('changemobstate', { isLoading: false, err: "すみません,出现错误啦，再试试吧！" })
            }
        )
    }


    render() {
        return (
            <div>
                <input type="text" ref={c => this.keyWordElement = c} placeholder="请输入要查找的手机号" />&nbsp;
                <button onClick={this.search}>搜索</button>

            </div >
        )
    }
}
