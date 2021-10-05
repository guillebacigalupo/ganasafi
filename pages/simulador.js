import Container from "../components/layout/container";
import Comparator from "../components/comparator";
import Script from "next/script";
import { useRouter } from "next/router";
import { useState } from "react";

const products = {
  "gana-rendimiento": {
    title: "GanaRendimiento - FIA",
  },
  "gana-inversiones": {
    title: "GanaInversiones - FIA",
  },
};

export default function Simulador({ data }) {
  const router = useRouter();
  console.log({ router });
  console.log({ data });

  const { currencySymbol, rate, times } = data;
  data.rate = data.rate ?? 0.095;

  const [capital, setCapital] = useState(0);
  const [result, setResult] = useState(0);
  const [currency, setCurrency] = useState(currencySymbol);

  const _calc = () => {
    let r = parseFloat(capital * Math.pow(1 + rate / 100, times)).toFixed(2);
    setResult(r);
    return r;
  };

  return (
    <Container>
      <div
        className="slide-area slide-area-2 fix"
        data-stellar-background-ratio="0.6"
      >
        <div className="display-table">
          <div className="display-table-cell">
            <div className="container">
              <div className="row">
                <div className="slide-text-inner">
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="slide-content">
                      <h2 className="title2">Realiza la simulación </h2>
                      <p>Accede a los fondos de inversión</p>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="money-send">
                      <div className="calculator-inner  text-left">
                        <div className="single-cal">
                          <div className="inner-form">
                            <form action="#">

                              <label>Fondo de inversion</label>
                              <select
                                
                              >
                                <option value="gana-inversiones">GanaInversiones (USD)</option>
                                <option value="gana-rendimiento">GanaRendimiento (Bs.)</option>
                                
                              </select>

                              <br/><br/>
                              <label>Valor inicial</label>
                              <input
                                type="number"
                                className="form-input"
                                placeholder="1000"
                                onChange={(e) => {
                                  setCapital(e.target.value);
                                }}
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  _calc();
                                }}
                              />
                              
                            </form>
                          </div>
                          <button className="cale-btn" onClick={_calc}>
                            Calcular
                          </button>
                          <div className="inner-form">
                            <form action="#">
                              <label className="text-light-green">
                                Valor final
                              </label>
                              <h3 className="text-green">
                                {currency} {result} *
                              </h3>
                            </form>
                          </div>
                          <div className="inner-form-text">
                            <div className="rate-text">
                              <span>
                                {" "}
                                <strong>{(rate / 100).toFixed(4)}</strong> Tasa
                                mensual
                              </span>
                              <span>
                                {" "}
                                <strong>(*)</strong> Plazo mensual
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Comparator />

      <div className="banner-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="banner-all area-80 text-center">
                <div className="banner-content">
                  <h3>¿Qué saber para invertir?</h3>
                  <a className="banner-btn" href="#">
                    Conocer más
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script
        dangerouslySetInnerHTML={{
          __html: `if ($('.slider-main').length) $('.slider-main').owlCarousel( {
                        loop: true,
                        nav: true,
                        margin: 0,
                        dots: false,
                        autoplay: true,
                        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                        responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        }
                        }
                    } );`,
        }}
        strategy="lazyOnload"
      />
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  console.log({ params });

  let res = await fetch("https://portalsafi.azurewebsites.net/api/producto");

  let body = await res.json();

  const data = body.payload;

  return {
    props: {
      data,
    },
  };
}
