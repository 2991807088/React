import React from "react";
import { Link, NavLink, Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './index.scss'
const Layouts = () => {
	const navigate = useNavigate()
	const jump = () => {
		navigate('/set', {
			state: {
				name: 'jiakng',
				age: 20
			}
		})
	}
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
                    <NavLink to='/'>首页</NavLink>
                    <div onClick={jump}>设置</div>
                </div>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        </div>
	);
};
export default Layouts;
