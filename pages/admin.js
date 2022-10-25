import React from "react";
import { useState } from "react";

const Admin = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="admin">
      {login ? (
        <div className="login">
          <form className="container">
            <div className="cover">
              <h2>ADMIN:</h2>
              <input
                type="text"
                placeholder="..."
                name="username"
                // onChange={handleChange}
              />
            </div>
            <div className="cover">
              <h2>PASSWORD:</h2>
              <input
                type="text"
                placeholder="*****"
                name="password"
                // onChange={handleChange}
              />
            </div>
            <button
              className="loginbtn"
              //   onClick={handleLogin}
              //   disabled={isFetching}
            >
              LOGIN
            </button>
          </form>
        </div>
      ) : (
        <div className="panel"> ADMIN PANEL</div>
      )}
    </div>
  );
};

export default Admin;
