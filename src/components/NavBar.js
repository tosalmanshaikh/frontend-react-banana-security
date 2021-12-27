import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { useHistory, Link } from 'react-router-dom';
import { AuthContext} from "../context/AuthContextProvider";

function NavBar() {

  //we import logout, isAuth as we need them!
  const  {logout, isAuth} = useContext(AuthContext);
  const history = useHistory();

  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

{/*//if authenticated that just show the logout button */}
      {isAuth ?
          <button
              type="button"
              onClick={logout}
          >Logout</button>

          :
//otherwise, show us the Log in, Register button!
          <div>
            <button
                type="button"
                onClick={() => history.push('/signin')}
            >
              Log in
            </button>
            <button
                type="button"
                onClick={() => history.push('/signup')}
            >
              Registreren
            </button>
          </div>
      }
    </nav>
  );
}

export default NavBar;
