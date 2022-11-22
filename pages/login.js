import React, { useState } from "react";
import { useRouter, useEffect } from "next/router";
import dotenv from "dotenv";
import Cookie from "js-cookie";

const Adminlogin = ({ admin_username, admin_password, token }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const router = useRouter();
  const HandleLogin = () => {
    if (username === admin_username && password === admin_password) {
      Cookie.set("token", token);
      router.push("/admin");
    }
  };

  return (
    <div className="adminlogin">
      <form className="container">
        <div className="cover">
          <h2>ADMIN:</h2>
          <input
            type="text"
            placeholder="..."
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="cover">
          <h2>PASSWORD:</h2>
          <input
            type="password"
            placeholder="*****"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="loginbtn" onClick={HandleLogin}>
          LOGIN
        </div>
      </form>
    </div>
  );
};

export default Adminlogin;

export const getServerSideProps = async () => {
  dotenv.config();

  return {
    props: {
      admin_username: process.env.ADMIN_USERNAME,
      admin_password: process.env.ADMIN_PASSWORD,
      token: process.env.TOKEN,
    },
  };
};
