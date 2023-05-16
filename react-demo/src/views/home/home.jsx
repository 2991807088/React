// import React from "react";
import { Layout } from "antd";
import Menu from '../../components/menu/index'
const { Header, Sider, Content } = Layout;
const headerStyle = {
	textAlign: "center",
	color: "#fff",
	display: "flex",
	justifyContent: "space-between",
    alignItems: 'center',
	height: 80,
	paddingInline: 40,
	backgroundColor: "#7dbcea",
};
const contentStyle = {
    textAlign: 'center',
    height: 'calc(100vh - 80px)',
    // lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
  };
  const siderStyle = {
    textAlign: 'center',
	width: 260,
    height: 'calc(100vh - 80px)',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };
const Home = () => {
	return (
		<Layout>
			<Header style={headerStyle}>
				<span>纪康系统</span>
				<span>个人中心</span>
			</Header>
			<Layout>
				<Sider width={260} style={siderStyle}>
					<Menu/>
				</Sider>
				<Content style={contentStyle}>Content</Content>
			</Layout>
		</Layout>
	);
};
export default Home;
