import {useDispatch} from 'react-redux';
import { login } from '../../store/session.js';

import './demo.css';

function Demo(){
  const dispatch = useDispatch();

  const loginDemo = e =>{
    e.preventDefault();
    const credential = "Demo-lition";
    const password = "password";

    return dispatch(login({credential, password}));
  }

  return (
      <button className="demo-button btn" onClick={loginDemo}>
        Demo User
      </button>
  )
}

export default Demo;
