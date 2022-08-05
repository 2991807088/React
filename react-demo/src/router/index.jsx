import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App';
import Home from '../views/Home';
import List from '../views/List';
import Detail from '../views/Detail';
import NoneMatch from '../views/404';
// 定义路由
const BaseRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
            {/* <Route path='/' element={<App/>}> */}
                <Route path='/' element={<Home/>}></Route>
                <Route path='/list' element={<List/>}></Route>
                <Route path='/detail' element={<Detail/>}></Route>
                <Route path='*' element={<NoneMatch/>}></Route>
            {/* </Route> */}
            </Routes>
        </BrowserRouter>
    )
}
export default BaseRouter