import React, {useState} from 'react'

function Child(props){
    console.log(props)
    return (
        <>
            <h4>{props.num}</h4>
            <button onClick={() => {props.setNum(123456789)}}>改变</button>
        </>
    )
}

function Father(props){
    return <Child num={props.num} setNum={props.setNum}/>
}
export default function Com1() {
    const [num,setNum] = useState(1)
  return <Father num={num} setNum={setNum}/>
}
