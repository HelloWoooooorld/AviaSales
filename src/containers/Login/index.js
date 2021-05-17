import './login.css';

const Login = () => {
    return (
        <div className="login-page">
            <div className="form">
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