import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import ReactWhatsapp from "react-whatsapp";

const Navbar = () => {
  const router = useRouter();
  // const [windowHeight, setWindowHeight] = useState("0");

  // const handleScroll = () => {
  //   setWindowHeight(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  //LANGUAGE TOGGLE
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);

  const [lang, setLang] = useState("esp");

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
              {lang === "esp" ? (
                <h2>PROGRAMAS ONLINE</h2>
              ) : lang === "eng" ? (
                <h2>ONLINE PROGRAMS</h2>
              ) : (
                <h2>PROGRAMAS ONLINE</h2>
              )}
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
              {lang === "esp" ? (
                <h2>CLASES PRESENCIALES</h2>
              ) : lang === "eng" ? (
                <h2>IN-CLASS</h2>
              ) : (
                <h2>AULAS PRESENCIAIS</h2>
              )}
            </a>
          </Link>

          <Link href="/nosotros">
            <a
              className={
                router.pathname == "/nosotros" ? "menuactive" : "menuinactive"
              }
            >
              {lang === "esp" ? (
                <h2>NOSOTROS</h2>
              ) : lang === "eng" ? (
                <h2>US</h2>
              ) : (
                <h2>NÓS</h2>
              )}
            </a>
          </Link>
          <Link href="/contacto">
            <a
              className={
                router.pathname == "/contacto" ? "menuactive" : "menuinactive"
              }
            >
              {lang === "esp" ? (
                <h2>CONTACTO</h2>
              ) : lang === "eng" ? (
                <h2>CONTACT</h2>
              ) : (
                <h2>CONTATO</h2>
              )}
            </a>
          </Link>
        </div>
        <div className="perfil">
          <div>
            {lang === "esp" ? (
              <>
                <div className="lang" onClick={onClick}>
                  ESP▾
                </div>
                <div className={show ? "show" : "noshow"}>
                  <div
                    className="lang"
                    onClick={() => {
                      setLang("eng");
                      setShow(!show);
                    }}
                  >
                    ENG
                  </div>
                  <div
                    className="lang"
                    onClick={() => {
                      setLang("por");
                      setShow(!show);
                    }}
                  >
                    POR
                  </div>
                </div>
              </>
            ) : lang === "eng" ? (
              <>
                <div className="lang" onClick={onClick}>
                  ENG▾
                </div>
                <div className={show ? "show" : "noshow"}>
                  <div
                    className="lang"
                    onClick={() => {
                      setLang("por");
                      setShow(!show);
                    }}
                  >
                    POR
                  </div>
                  <div
                    className="lang"
                    onClick={() => {
                      setLang("esp");
                      setShow(!show);
                    }}
                  >
                    ESP
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="lang" onClick={onClick}>
                  POR▾
                </div>
                <div className={show ? "show" : "noshow"}>
                  <div
                    className="lang"
                    onClick={() => {
                      setLang("esp");
                      setShow(!show);
                    }}
                  >
                    ESP
                  </div>
                  <div
                    className="lang"
                    onClick={() => {
                      setLang("eng");
                      setShow(!show);
                    }}
                  >
                    ENG
                  </div>
                </div>
              </>
            )}
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
