import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const jump = () => {
        navigate('/list', {
            state: {
                name: 'test',
                age: 26,
                gender: 'male'
            }
        })
    }
    return (
        <div>Home
            <button onClick={jump}>list</button>
            <button onClick={() => navigate('/detail?name=jikang')}>detail</button>
        </div>
    )
}
