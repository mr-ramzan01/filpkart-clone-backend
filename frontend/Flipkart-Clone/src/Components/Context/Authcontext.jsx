import { createContext, useState } from "react";
export const Authcontext = createContext();

const AuthContextProvider = ({ children }) => {

  let loginCheck = JSON.parse(localStorage.getItem("loginCheck")) || false
  console.log("test 2 login local ", typeof loginCheck, loginCheck, localStorage.getItem("flipkartUserName"));


  let loginsetName = localStorage.getItem("loginsetName") || localStorage.getItem("flipkartUserName") || "Login"
  const [name, setName] = useState(loginsetName);

  const [correct, setCorrect] = useState(loginCheck)

  localStorage.setItem("loginCheck", JSON.stringify(correct));
    // console.log(correct, " test corret ");
    // const [isAuth, setIsAuth] = useState(false);
  
    // const handleLogin = (body) => {
    //   fetch(`https://flipkart-data.onrender.com/User`, {
    //     method: "POST",
    //     body: JSON.stringify(body),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //     .then(() => setIsAuth(true))
    //     .catch(() => setIsAuth(false));
    // };
  
  
    console.log(correct," check correct in context  ");
    return (
      <Authcontext.Provider value={{ correct, setCorrect, name, setName }}>
        {children}
      </Authcontext.Provider>
    );
  };
  
  export default AuthContextProvider;
  