import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App';
// import Login from '../views/login/login';
// import Home from '../views/home/home';
// 定义路由
const BaseRouter = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path='/' element={<App/>}>
        //         {/* <Route path='/' element={<Login/>}></Route> */}
        //         <Route path='/home' element={<Home/>}></Route>
        //         <Route path='/list' element={<List/>}></Route>
        //         <Route path='/detail' element={<Detail/>}></Route>
        //         <Route path='*' element={<NoneMatch/>}></Route>
        //     </Route>
        //     </Routes>
        // </BrowserRouter>
    )
}
export default BaseRouter