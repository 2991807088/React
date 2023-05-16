import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import React, { memo } from "react";

const Login = memo((props) => {
	const navigate = useNavigate();
	const onFinish = (values) => {
		navigate("/");
		console.log("Success:", values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	const { username, password, remember } = props.params;
	const { title, setTitle } = props;
	return (
		<>
			{/* <div className="title">{title}</div>
            <button onClick={() => {setTitle('纪康修改了系统标题')}}>切换标题</button> */}
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="账号"
					name={username}
					rules={[
						{
							required: true,
							message: "请输入用户名",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="密码"
					name={password}
					rules={[
						{
							required: true,
							message: "请输入密码",
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					name={remember}
					valuePropName="checked"
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Checkbox>记住我</Checkbox>
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						登录
					</Button>
				</Form.Item>
			</Form>
		</>
	);
});
export default Login;
