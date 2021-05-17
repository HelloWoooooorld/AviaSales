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
                <a onClick={() => moToUrl('')} className="logo">Aviasales</a>
                <a  onClick={() => moToUrl('login')} className="nav-visible-seach button">Login</a>
            </div>
        </header>
    )
}

export default Header;