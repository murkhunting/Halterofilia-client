import React from "react";
import Link from "next/link";
import Cookie from "js-cookie";
import Router from "next/router";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import "animate.css";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoLanguage } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import ReactWhatsapp from "react-whatsapp";

const Navbar = () => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["lang"]);

  //LANGUAGE TOGGLE
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);

  const [showMenu, setShowMenu] = useState(false);
  const onClickMenu = () => setShowMenu(!showMenu);
  console.log(showMenu);

  const [lang, setLang] = useState(cookies.lang);
  // () => JSON.parse(initialLang)

  //save cookie
  useEffect(() => {
    Cookie.set("lang", lang);
  }, [lang]);

  return (
    <div className="navbar">
      <div className="container">
        <Link href="/">
          <a>
            <img className="logo" src="/images/logo.png" alt="logo" />
          </a>
        </Link>
        {/* HAMBURGER MENU FOR MOVILE AND TABLET */}
        <div className="menuMovil">
          <h1 onClick={onClickMenu}>
            <HiMenu />
          </h1>
          <div
            className={
              showMenu
                ? "menucontainer animate__animated animate__slideInDown"
                : "nomenucontainer"
            }
          >
            <Link href="/">
              <a
                className={
                  router.pathname == "/" ? "menuactive" : "menuinactive"
                }
                onClick={onClickMenu}
              >
                <h2>HOME</h2>
              </a>
            </Link>
            <Link href="/formaciones">
              <a
                className={
                  router.pathname == "/formaciones"
                    ? "menuactive"
                    : "menuinactive"
                }
                onClick={onClickMenu}
              >
                {lang === "por" ? (
                  <h2>FORMAÇÕES</h2>
                ) : lang === "eng" ? (
                  <h2>FORMATIONS</h2>
                ) : (
                  <h2>FORMACIONES</h2>
                )}
              </a>
            </Link>
            <Link href="/programas">
              <a
                className={
                  router.pathname == "/programas"
                    ? "menuactive"
                    : "menuinactive"
                }
                onClick={onClickMenu}
              >
                {lang === "por" ? (
                  <h2>PROGRAMAS</h2>
                ) : lang === "eng" ? (
                  <h2>PROGRAMS</h2>
                ) : (
                  <h2>PROGRAMAS</h2>
                )}
              </a>
            </Link>
            <Link href="/clases">
              <a
                className={
                  router.pathname == "/clases" ? "menuactive" : "menuinactive"
                }
                onClick={onClickMenu}
              >
                {lang === "por" ? (
                  <h2>AULAS</h2>
                ) : lang === "eng" ? (
                  <h2>CLASSES</h2>
                ) : (
                  <h2>CLASES</h2>
                )}
              </a>
            </Link>
            <Link href="/nosotros">
              <a
                className={
                  router.pathname == "/nosotros" ? "menuactive" : "menuinactive"
                }
                onClick={onClickMenu}
              >
                {lang === "por" ? (
                  <h2>NÓS</h2>
                ) : lang === "eng" ? (
                  <h2>US</h2>
                ) : (
                  <h2>NOSOTROS</h2>
                )}
              </a>
            </Link>
            <Link href="/contacto">
              <a
                className={
                  router.pathname == "/contacto" ? "menuactive" : "menuinactive"
                }
                onClick={onClickMenu}
              >
                {lang === "por" ? (
                  <h2>CONTATO</h2>
                ) : lang === "eng" ? (
                  <h2>CONTACT</h2>
                ) : (
                  <h2>CONTACTO</h2>
                )}
              </a>
            </Link>
            <Link href="/info">
              <a
                className={
                  router.pathname == "/info" ? "menuactive" : "menuinactive"
                }
                onClick={onClickMenu}
              >
                {lang === "por" ? (
                  <h2>INFO</h2>
                ) : lang === "eng" ? (
                  <h2>INFO</h2>
                ) : (
                  <h2>INFO</h2>
                )}
              </a>
            </Link>
            <div className="close" onClick={onClickMenu}>
              <RiCloseFill />
            </div>
          </div>
        </div>

        {/* NAVBAR MENU FOR PC */}
        <div className="menu">
          <Link href="/formaciones">
            <a
              className={
                router.pathname == "/formaciones"
                  ? "menuactive"
                  : "menuinactive"
              }
            >
              {lang === "por" ? (
                <h2>FORMAÇÕES</h2>
              ) : lang === "eng" ? (
                <h2>FORMATIONS</h2>
              ) : (
                <h2>FORMACIONES</h2>
              )}
            </a>
          </Link>
          <Link href="/programas">
            <a
              className={
                router.pathname == "/programas" ? "menuactive" : "menuinactive"
              }
            >
              {lang === "por" ? (
                <h2>PROGRAMAS</h2>
              ) : lang === "eng" ? (
                <h2>PROGRAMS</h2>
              ) : (
                <h2>PROGRAMAS</h2>
              )}
            </a>
          </Link>
          <Link href="/clases">
            <a
              className={
                router.pathname == "/clases" ? "menuactive" : "menuinactive"
              }
            >
              {lang === "por" ? (
                <h2>AULAS</h2>
              ) : lang === "eng" ? (
                <h2>CLASSES</h2>
              ) : (
                <h2>CLASES</h2>
              )}
            </a>
          </Link>
          <Link href="/nosotros">
            <a
              className={
                router.pathname == "/nosotros" ? "menuactive" : "menuinactive"
              }
            >
              {lang === "por" ? (
                <h2>NÓS</h2>
              ) : lang === "eng" ? (
                <h2>US</h2>
              ) : (
                <h2>NOSOTROS</h2>
              )}
            </a>
          </Link>
          <Link href="/contacto">
            <a
              className={
                router.pathname == "/contacto" ? "menuactive" : "menuinactive"
              }
            >
              {lang === "por" ? (
                <h2>CONTATO</h2>
              ) : lang === "eng" ? (
                <h2>CONTACT</h2>
              ) : (
                <h2>CONTACTO</h2>
              )}
            </a>
          </Link>
          <Link href="/info">
            <a
              className={
                router.pathname == "/info" ? "menuactive" : "menuinactive"
              }
            >
              {lang === "por" ? (
                <h2>INFO</h2>
              ) : lang === "eng" ? (
                <h2>INFO</h2>
              ) : (
                <h2>INFO</h2>
              )}
            </a>
          </Link>
        </div>
        <div className="perfil">
          <div>
            <div className="lang" onClick={onClick}>
              <h2>
                <IoLanguage />
              </h2>
            </div>
            <div className={show ? "show" : "noshow"}>
              <div
                className="lang"
                onClick={() => {
                  setLang("esp");
                  setShow(!show);
                  Router.reload();
                }}
              >
                ESP
              </div>
              <div
                className="lang"
                onClick={() => {
                  setLang("eng");
                  setShow(!show);
                  Router.reload();
                }}
              >
                ENG
              </div>
              <div
                className="lang"
                onClick={() => {
                  setLang("por");
                  setShow(!show);
                  Router.reload();
                }}
              >
                POR
              </div>
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
