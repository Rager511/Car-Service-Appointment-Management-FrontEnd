import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const values = JSON.parse(sessionStorage.getItem("auth"));
  const [auth, setAuth] = useState(values);

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
