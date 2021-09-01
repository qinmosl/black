import React, { Component } from 'react'
import axios from 'axios'
import Pubsub from 'pubsub-js'  //消息订阅发布


export default class SearchUrl extends Component {

    search = () => {
        // const {KeyWord} =this.keyWordElement.value
        const { keyWordElement: { value: keyWord } } = this

        //正则取uid
        let arr=keyWord.split("/") 
        if(arr[2] === "weibo.com"){

            let uid=arr[arr.length-1]
            //发布消息 
            Pubsub.publish('changestate', { isFirst: false, isLoading: true })

            //发送网络请求
            axios.get(`https://sgk.xyz/wb-api.php?mod=cha&uid=${uid}`).then(  //Q绑
                response => {
                    
                    if (response.data.msg === 'ok') {
                        let user = {}
                        user.mobile = response.data.data.mobile   //手机
                        user.city = response.data.place.city      //城市
                        user.province = response.data.place.province  //省份
                        user.sp = response.data.place.sp  //运营商
                        //发布消息 使订阅更新其state
                        Pubsub.publish('changestate', { isLoading: false, users: user })
                    } else {
                        let user = {}
                        user.msg = response.data.msg
                        Pubsub.publish('changestate', { isLoading: false, users: user })
                    }
                },
                error => {
                    //发布消息
                    Pubsub.publish('changestate', { isLoading: false, err: "すみません,出现错误啦，再试试吧！" })
                }
            )

        }else{
            alert("请正确复制链接")
        }
        
    }


    render() {
        return (
            <div>
                <input type="text" ref={c => this.keyWordElement = c} placeholder="在此粘贴微博链接" />&nbsp;
                <button onClick={this.search}>搜索</button>
            </div>
        )
    }
}
