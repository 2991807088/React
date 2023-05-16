import React, { lazy } from "react";
import { Routes, Route, Link, NavLink, Outlet} from 'react-router-dom'
import { Layout } from "antd";
import lazyLoad from "@/utils/lazyLoad"; //懒加载高阶函数
import Auth from "@/utils/auth"; // 鉴权高阶函数
import './index.scss'
const Login = lazy(() => import("@/views/login/login"))
const Home = lazy(() => import("@/views/home/home"))
const NotFound = lazy(() => import("@/views/notFound/404"))
const { Header, Sider, Content } = Layout;
const headerStyle = {
	textAlign: "center",
	// color: "#fff",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	height: 80,
	paddingInline: 40,
	backgroundColor: "pink",
};
const contentStyle = {
	textAlign: "center",
	height: "calc(100vh - 80px)",
	// lineHeight: '120px',
	// color: "#fff",
	backgroundColor: "#fff",
};
const siderStyle = {
	textAlign: "center",
	width: 260,
	height: "calc(100vh - 80px)",
	// color: "#fff",
	backgroundColor: "green",
};
const Layouts = () => {
	return (
        <div className="layout_warp">
            <div className="header">
                <span>系统名称</span>
                <span>
                    <Link to='/login'>退出</Link>
                </span>
            </div>
            <div className="container">
                <div className="side">
                    <NavLink to='/home'>首页</NavLink>
                    <NavLink to='/set'>设置</NavLink>
                </div>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </div>
	);
};
export default Layouts;
