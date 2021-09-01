import React, { Component } from 'react'

// import ResultUrl from '../../../components/Result-url'
import SearchUrl from '../../../components/Search-url'
import Result from '../../../components/Result'

export default class Urltomob extends Component {
    render() {
        return (
            <div>
                {/* 这个其实也可以是Search复用 */}
                <SearchUrl/>        
                {/* <ResultUrl/>        可以和q绑共用 */}
                <Result/>
            </div>
        )
    }
}
