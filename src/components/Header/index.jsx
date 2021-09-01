import React, { Component } from 'react'
import { Carousel } from 'antd';

export default class Header extends Component {


    render() {
        const style = {
            contentStyle1 : {
                height: '180px',
                color: '#fff',
                textAlign: 'center',
                background: '#666666',
                backgroundImage: `url("https://react-1305405728.cos.ap-nanjing.myqcloud.com/baisi1.jpg")`,
                backgroundSize:'cover'
            },
            contentStyle2:{
                color: '#fff',
                height: '180px',
                textAlign: 'center',
                background: '#666666',
                backgroundImage: `url("https://react-1305405728.cos.ap-nanjing.myqcloud.com/baisi2.jpg")`,
                backgroundSize:'cover'
            },
            contentStyle3:{
                height: '180px',
                color: '#fff',
                textAlign: 'center',
                background: '#666666',
                backgroundImage: `url("https://react-1305405728.cos.ap-nanjing.myqcloud.com/baisi3.jpg")`,
                backgroundSize:'cover'
            },
            contentStyle4:{
                height: '180px',
                color: '#fff',
                textAlign: 'center',
                background: '#666666',
                backgroundImage: `url("https://react-1305405728.cos.ap-nanjing.myqcloud.com/baisi4.jpg")`,
                backgroundSize:'cover'
            },
           

        }
        

        return (
            // 渐显+自动播放
                <Carousel effect="fade" autoplay>
                    <div>
                        <div style={style.contentStyle1}></div>
                    </div>
                    <div>
                        <div style={style.contentStyle2}></div>
                    </div>
                    <div>
                        <div style={style.contentStyle3}></div>
                    </div>
                    <div>
                        <div style={style.contentStyle4}></div>
                    </div>
                </Carousel>
          
        )
    }
}
