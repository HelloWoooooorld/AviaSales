import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Header from '../components/header';
import Home from '../containers/Home/index';
import Login from '../containers/Login/index';

const Routes = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path='/login'>
                    <Login/>
                </Route>
                <PrivateRoute path='/' component={Home} />
            </Switch>
        </Router>

    )
}

export default Routes;