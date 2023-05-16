import Login from '../../components/login/index'
import { useState } from 'react';
import './Login.scss'
const Logins = () => {
    const params = {
        username: 'username',
        password: 'password',
        remember: 'remember'
    }
    const [title, setTitle] = useState('纪康系统开发')
	return (
		<div className="login">
			<Login params={params} title={title} setTitle={(p) => setTitle(p)}></Login>
		</div>
	);
}
export default Logins
