import React, { Component } from 'react'

import Search from '../../components/Search'
import Result from '../../components/Result'

export default class Qbang extends Component {
    render() {
        return (
            <div>
                <Search/>
                <Result/>
            </div>
        )
    }
}
