import React, { Component } from 'react'
import axios from 'axios'
import Pubsub from 'pubsub-js'  //消息订阅发布
import { Input,  } from 'antd';
const { Search } = Input;

export default class search extends Component {

    // search = () => {
    //     // const {KeyWord} =this.keyWordElement.value
    //     const { keyWordElement: { value: keyWord } } = this

    //     //发布消息 
    //     Pubsub.publish('changestate', { isFirst: false, isLoading: true })

    //     //发送网络请求
    //     axios.get(`https://sgk.xyz/qb-api.php?mod=cha&qq=${keyWord}`).then(  //Q绑
    //         response => {

    //             if (response.data.msg === 'ok') {
    //                 let user = {}
    //                 user.mobile = response.data.data.mobile   //手机
    //                 user.city = response.data.place.city      //城市
    //                 user.province = response.data.place.province  //省份
    //                 user.sp = response.data.place.sp  //运营商
    //                 //发布消息 使订阅更新其state
    //                 Pubsub.publish('changestate', { isLoading: false, users: user })
    //             } else {
    //                 let user = {}
    //                 user.msg = response.data.msg
    //                 Pubsub.publish('changestate', { isLoading: false, users: user })
    //             }
    //         },
    //         error => {

    //             //发布消息
    //             Pubsub.publish('changestate', { isLoading: false, err: "すみません,出现错误啦，再试试吧！" })
    //         }
    //     )
    // }

     search = (value) => {
      
        //发布消息 
        Pubsub.publish('changestate', { isFirst: false, isLoading: true })

        //发送网络请求
        axios.get(`https://sgk.xyz/qb-api.php?mod=cha&qq=${value}`).then(  //Q绑
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
    }


    render() {
        return (
            <div>
                {/* <input type="text" ref={c => this.keyWordElement = c} placeholder="请输入要查找的QQ号" />&nbsp; */}
                <Search placeholder="请输入要查找的QQ号" onSearch={this.search} enterButton />
                {/* <button onClick={this.search}>搜索</button> */}
            </div>
        )
    }
}
