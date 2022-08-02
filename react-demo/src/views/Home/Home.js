import { useState,useEffect } from "react"
import {Link} from 'react-router-dom'
export default function Home(){
  // const [msg, setmsg] = useState('Giovanni')
  // const [num,setnum] = useState(1)
  // useEffect(() => {
  //   console.log('页面初始化sss')
  // },[])
  // 模拟beforeDestory
  // useEffect(() => {
  //   return () => {
  //     console.log('销毁')
  //   }
  // })
  return (
    <>
      <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/test">测试</Link>
          </li>
        </ul>
    </>
  )
}