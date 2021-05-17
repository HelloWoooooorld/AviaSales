import {
    Route,
    Redirect,
} from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        // isAuth ? <Component {...props} /> : <Redirect to='/login' />
       <Redirect to='/login' />
    )} />
)

export default PrivateRoute;