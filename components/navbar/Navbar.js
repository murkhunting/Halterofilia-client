import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import ReactWhatsapp from "react-whatsapp";

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

  //LANGUAGE TOGGLE
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);

  const [lang, setLang] = useState("esp");
  console.log(lang);

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
              PROGRAMAS ONLINE
            </a>
          </Link>
          <Link href="/presenciales">
            <a
              className={
                router.pathname == "/presenciales"
                  ? "menuactive"
                  : "menuinactive"
              }
            >
              CLASES PRESENCIALES
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
        <div className="perfil">
          <div>
            <div onClick={onClick}>ESP▾</div>
            <div className={show ? "show" : "noshow"}>
              <div onClick={() => setLang("eng")}>ENG</div>
              <div onClick={() => setLang("por")}>POR</div>
            </div>
          </div>
          <ReactWhatsapp className="whats" number="+34 616 956 279">
            <AiOutlineWhatsApp />
          </ReactWhatsapp>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
