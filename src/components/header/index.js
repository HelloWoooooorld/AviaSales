import { useHistory } from 'react-router-dom';
import './header.css';

const Header = ({ user, signout }) => {
  let history = useHistory();
  console.log(user, 'from header');

  const moveToUrl = (way) => {
    history.push(`/${way}`);
  };

  return (
    <header>
      <div className='container'>
        <a onClick={() => moveToUrl('')} className='logo'>
          Aviasales
        </a>

        {user ? (
          <a onClick={signout} className='nav-visible-seach button'>
            Logout
          </a>
        ) : (
          <a
            onClick={() => moveToUrl('login')}
            className='nav-visible-seach button'>
            Login
          </a>
        )}
      </div>
    </header>
  );
};

export default Header;
