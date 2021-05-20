import {
    Route,
    Redirect,
} from "react-router-dom";
import { useAuth } from "../hooks/use-auth";


const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route {...rest} render={(props) => (
            user ? <Component {...props} /> : <Redirect to='/login' />
        )} />
    )
}

<<<<<<< HEAD
const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route {...rest} render={(props) => (
        user ? <Component {...props} /> : <Redirect to='/login' />
    )} />
)
=======

>>>>>>> form

export default PrivateRoute;