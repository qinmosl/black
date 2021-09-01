import React, { Component } from 'react'

import ResultMob from '../../../components/Result-mob'
import SearchMob from '../../../components/Search-mob'

export default class Mobtourl extends Component {
    render() {
        return (
            <div>
                <SearchMob/>
                <ResultMob/>
            </div>
        )
    }
}
