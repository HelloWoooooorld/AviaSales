import {
    Route,
    Redirect,
} from "react-router-dom";

 const isAuth = false;

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuth ? <Component {...props} /> : <Redirect to='/login' />
    )} />
)

export default PrivateRoute;