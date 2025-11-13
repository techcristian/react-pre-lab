import { useContext } from "react"
import { AuthContext } from "./AuthContex"

export const useAuthContext = () => {
  return useContext(AuthContext);
 
}