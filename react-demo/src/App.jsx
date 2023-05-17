import React, { lazy } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import routes from "@/router";
import Layouts from "@/components/layout/index";
import lazyLoad from "@/utils/lazyLoad";
const Login = lazy(() => import("@/views/login/login"));
const Home = lazy(() => import("@/views/home/home"));
const Set = lazy(() => import("@/views/set/set"));
const NotFound = lazy(() => import("@/views/notFound/404"));
import Auth from "@/utils/auth";
const App = () => {
	return (
		// <Routes>
		// 	<Route path="/" element={<Auth comp={lazyLoad(Layouts)} />}>
		// 		<Route index element={lazyLoad(Home)} />
		// 		<Route path="/set" element={lazyLoad(Set)} />
		// 	</Route>
		// 	<Route path="/login" element={lazyLoad(Login)} />
		// 	<Route path="*" element={lazyLoad(NotFound)} />
		// </Routes>
		<>{useRoutes(routes)}</>
	);
};
export default App;
