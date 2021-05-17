import './login.css';

const Login = () => {
    return (
        <div className="login-page">
            <div className="form">
                <h2>Login</h2>
                <form className="login-form">
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;