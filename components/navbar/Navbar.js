import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const [windowHeight, setWindowHeight] = useState("0");

  const handleScroll = () => {
    setWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  console.log(windowHeight);

  return (
    <div className="navbar">
      <div className="container">
        <Link href="/">
          <a>
            <img className="logo" src="/images/logo.png" alt="logo" />
          </a>
        </Link>
        <div className="menu">
          <Link href="/online">
            <a
              className={
                router.pathname == "/online" ? "menuactive" : "menuinactive"
              }
            >
              ONLINE
            </a>
          </Link>
          <Link href="/formaciones">
            <a
              className={
                router.pathname == "/formaciones"
                  ? "menuactive"
                  : "menuinactive"
              }
            >
              FORMACIONES
            </a>
          </Link>
          <Link href="/presencial">
            <a
              className={
                router.pathname == "/presencial" ? "menuactive" : "menuinactive"
              }
            >
              PRESENCIAL
            </a>
          </Link>
          <Link href="/nosotros">
            <a
              className={
                router.pathname == "/nosotros" ? "menuactive" : "menuinactive"
              }
            >
              NOSOTROS
            </a>
          </Link>
          <Link href="/contacto">
            <a
              className={
                router.pathname == "/contacto" ? "menuactive" : "menuinactive"
              }
            >
              CONTACTO
            </a>
          </Link>
        </div>
        <div className="perfil">IDIOMA</div>
      </div>
    </div>
  );
};

export default Navbar;
