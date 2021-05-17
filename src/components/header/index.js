import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import './header.css';

const Header = () => {
    let history = useHistory();

    const moToUrl = (way) => {
        history.push(`/${way}`);
    }

    return (
        <header>
            <div className="container">
                <Link onClick={() => moToUrl('')} className="logo">Aviasales</Link>
                <Link onClick={() => moToUrl('login')} className="nav-visible-seach button">Login</Link>
            </div>
        </header>
    )
}

export default Header;