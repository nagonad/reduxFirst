import {useState} from "react";
import { useDispatch } from "react-redux";
import { login,logout } from "../features/user";

const Login = () => {
  const[loginInfo, setLoginInfo] = useState({})

  const dispatch = useDispatch()

  const handleChange= (e) => {
    setLoginInfo({...loginInfo , [e.target.name]:e.target.type==="text" ? e.target.value : Number(e.target.value)})
  }

  const loginn = () => {
    dispatch(login(loginInfo))
  }

  const logoutt = () => {
    dispatch(logout())
  }


  return (
    <div>
      <input onChange={handleChange} type="text" name="name" placeholder="name" />
      <input onChange={handleChange} type="text" name="email" placeholder="email" />
      <input onChange={handleChange} type="number" name="age" placeholder="age" />
      <button onClick={loginn}>Login</button>
      <button onClick={logoutt}>Logout</button>
    </div>
  );
};

export default Login;
