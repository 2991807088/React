import React, { Component } from 'react'

export default class Com2 extends Component {
    constructor(props){
        super(props)
    }
    onChangeS = p => {
        // console.log(this.props)
        this.props.onchange(p)
    }
    render() {
        const {name} = this.props
        return (
            <>
                <div>我是子组件{name}</div>
                <button onClick={() => {this.onChangeS('传惨测试')}}>子传父</button>
            </>
        )
    }
}
