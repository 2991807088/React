import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function Detail() {
    const [searchParams] = useSearchParams()
    console.log('参数', searchParams)  
    return (
        <div>Detail</div>
    )
}
