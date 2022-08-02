import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App';
import Home from "../views/Home/Home";
import Test from '../views/Test/Test'

// 定义路由
const BaseRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<App/>}>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/test' element={<Test/>}></Route>
            </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default BaseRouter