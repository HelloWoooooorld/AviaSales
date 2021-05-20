import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ user, signout }) => {
  return (
    <header>
      <div className='container'>
        <Link to='/' className='logo'>
          Aviasales
        </Link>

        {user ? (
          <Link to='/' onClick={signout} className='nav-visible-seach button'>
            Logout
          </Link>
        ) : (
          <Link
            to='/login'
            className='nav-visible-seach button'>
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
