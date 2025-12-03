import { useState } from "react"
import { AuthContext } from "./AuthContex";


export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(() => {
    const saved= sessionStorage.getItem("session");
    if(saved){
      return JSON.parse(saved);
    };
    return null;
  })

const login = (name,password) => {
  const name_key = import.meta.env.VITE_ADMIN_KEY
  const password_key = import.meta.env.VITE_PASSWORD_KEY

  if(name === name_key  && password === password_key  ){
    const session = {name};
    setUser(session);
    sessionStorage.setItem("session", JSON.stringify(session));
    return true;
  }
  return false;
};

return (
<AuthContext.Provider value={{ user, login }}>
  {children}
</AuthContext.Provider>

)

}