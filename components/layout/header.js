import { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import HTMLHead from "./partials/head.js";
import Link from "next/link";
import Img from "../image";

const Logo = () => {
  return <Img s="logo/logo.png" />;
};

const Menu = (props) => {
  const { c } = props;

  return (
    <ul className={c ?? ""}>
      <li>
        <Link href="/">
          <a className="pages">Inicio</a>
        </Link>
      </li>
      <li>
        <Link href="/quienes-somos">
          <a className="pages">Quienes Somos</a>
        </Link>
      </li>
      <li>
        <Link
          href="/#comparador"
          onClick={(e) => {
            window &&
              window.scrollTo({
                top: document.querySelector("#comparador").offsetTop,
                behavior: "smooth",
              });
          }}
        >
          <a>Comparador</a>
        </Link>
      </li>
      <li>
        <Link href="/productos">
          <a className="pages">Productos</a>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link href="/productos/gana-rendimiento">
              <a>GanaRendimiento</a>
            </Link>
          </li>
          <li>
            <Link href="/productos/gana-inversiones">
              <a>GanaInversiones</a>
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/contacto">
          <a className="pages">Contacto</a>
        </Link>
      </li>
      <li>
        <Link href="/faq">
          <a>Preguntas Frecuentes</a>
        </Link>
      </li>
    </ul>
  );
};

export default function Header({ data }) {
  const breakpoint = 767;

  return (
    <>
      <HTMLHead />

      {/*<div id="preloader"></div>*/}

      <header className="header-one">
        <MediaQuery query={`(min-width: ${breakpoint}px)`}>
          <div id="sticker" className="header-area hidden-xs">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="row">
                    <div className="col-md-3 col-sm-3">
                      <div className="logo">
                        <Link href="/">
                          <a className="navbar-brand page-scroll white-logo">
                            <Logo />
                          </a>
                        </Link>
                        <Link href="/">
                          <a className="navbar-brand page-scroll black-logo">
                            <Logo />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9">
                      <div className="header-right-link">
                        <Link href="">
                          <a className="s-menu">Ingresar</a>
                        </Link>
                      </div>

                      <nav className="navbar navbar-default">
                        <div
                          className="collapse navbar-collapse"
                          id="navbar-example"
                        >
                          <div className="main-menu">
                            <Menu c="nav navbar-nav navbar-right" />
                          </div>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery query={`(max-width: ${breakpoint}px)`}>
          <div className="mobile-menu-area hidden-lg hidden-md hidden-sm">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="mobile-menu">
                    <div className="logo">
                      <Link href="/">
                        <a>
                          <Logo />
                        </a>
                      </Link>
                    </div>
                    <nav id="dropdown">
                      <Menu />
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
      </header>
    </>
  );
}
