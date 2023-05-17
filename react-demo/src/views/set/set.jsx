import React, {useEffect} from 'react'
import { useParams, useSearchParams, useLocation } from 'react-router-dom'
const set = () => {
  // const [params] = useSearchParams()[0]


  const {name} = Object.fromEntries(useSearchParams()[0])
  console.log('name', name)
  const {state} = useLocation()
  // useEffect(() => {
    console.log('state', state)
  // })
  return (
    <div>
        我是设置
    </div>
  )
}

export default set
