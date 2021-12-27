import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContextProvider";

function SignIn() {

    //we import login
    const {login} = useContext(AuthContext)

    //e.preventDefault prevent refreshment, we use the login that we imported!
    function handleSubmit(e){
        e.preventDefault()
        login()
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

        {/*//we use the handleSubmit, function we created  earlier!*/}
      <form onSubmit={handleSubmit}>
        <p>*invoervelden*</p>
        <button>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;
