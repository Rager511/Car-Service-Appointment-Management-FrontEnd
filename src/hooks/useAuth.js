import { useContext, useDebugValue } from "react";
import AuthContext from "context/Authprovider";

const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, (auth) => (auth?.email ? "Authenticated" : "Not Authenticated"));
  return useContext(AuthContext);
};

export default useAuth;
