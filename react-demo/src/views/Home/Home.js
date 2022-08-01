import { useState,useEffect } from "react"
export default function Home(){
  // const [msg, setmsg] = useState('Giovanni')
  // const [num,setnum] = useState(1)
  useEffect(() => {
    console.log('页面初始化sss')
  },[])
  return (
    <>
      {/* <p>{msg}</p>
      <p>{num}</p>
      <button onClick={() => setmsg('你好')}>change</button>
      <button onClick={() => {setnum(num+1)}}>累加</button> */}
    </>
  )
}