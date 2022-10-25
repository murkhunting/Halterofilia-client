import React from "react";
import { useState } from "react";

const Auth = () => {
  const [login, setLogin] = useState(false);
  return login ? <div>LOGIN</div> : <div> ADMIN PANEL</div>;
};

export default Auth;
