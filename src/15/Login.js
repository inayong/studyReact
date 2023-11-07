import LoginForm from "./LoginForm";
import Logout from "./Logout";
import { useState, useEffect } from "react";

const Login = () => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {

        setUser(localStorage.getItem("user"))
    }, []);

  return (
    <main className="container">
        { user ? <Logout user={user} setUser={setUser}/>  
                : <LoginForm setUser={setUser}/>  //user가 있으면 logout폼이 뜨고 없으면 로그인폼만 뜸
        }
    </main>
  )
}

export default Login