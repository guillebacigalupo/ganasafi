import Link from "next/link";

export default function Comparator({ data }) {
    const message = "Deseo solicitar infomación sobre GanaRendimiento";
  return (
    <>
      <div className="pricing-area area-padding-2" id="comparador">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h3 className="text-light-green">Comparador de fondos</h3>
                <p>
                  Conoce las cracterísticas de cada uno de nuestros productos
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="pricing-content">
              <div className="col-md-6 col-sm-6  col-xs-12">
                <div className="table-list">
                  <div className="top-price-inner">
                    <div className="price-title">
                      <h4 className="text-green">GanaInversiones - FIA</h4>
                    </div>
                    <div className="rates">
                      Moneda: <span className="users">Dolares</span>
                    </div>
                  </div>
                  <ol>
                    <li className="">
                      <strong>
                        Inversiones a Corto Plazo concentradas en USD, perfil
                        conservador
                      </strong>
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Monto de apertura:
                      </strong>{" "}
                      USD 100
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Rescates permitidos:
                      </strong>{" "}
                      Sin Restricciones. Sin previa notificación $us. 100.000
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Política de rescate:
                      </strong>{" "}
                      Con 3 dias hábiles de notificación de $us. 100.001 a
                      $us.500.000 <br />
                      Con 4 días hábiles mayores a $us. 500.000
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Permanencia mínima de la Inversión en cuotas:
                      </strong>{" "}
                      1 día
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Perfil Inversor:
                      </strong>{" "}
                      Invesores conservadores que desean un rendimiento
                      atractivo en USD, y alta disponibilidad de sus recursos
                    </li>
                  </ol>
                  <div className="price-btn">
                    <Link
                      href={{
                        pathname: "contacto/[message]",
                        query: {
                          message,
                        },
                      }}
                      as={`contacto?m=${encodeURIComponent(message)}`}
                    >
                      <a>Solicitar</a>
                    </Link>
                  </div>
                  
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="table-list">
                  <div className="top-price-inner">
                    <div className="price-title dark">
                      <h4 className="">GanaRendimiento - FIA</h4>
                    </div>
                    <div className="rates">
                      Moneda: <span className="users">Bolivianos</span>
                    </div>
                  </div>
                  <ol>
                    <li className="">
                      <strong>
                        Inversiones a Corto Plazo concentradas en Bs y también
                        en USD, perfil conservador
                      </strong>
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Monto de apertura:
                      </strong>{" "}
                      Bs. 1000
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Rescates permitidos:
                      </strong>{" "}
                      Sin Restricciones. sin previa notificación Bs. 700.000
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Política de rescate:
                      </strong>{" "}
                      Con 3 dias hábiles de notificación de bs. 700.001 a Bs.
                      3.500.000 <br />
                      Con 4 días hábiles mayores a Bs.3.500.001
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Permanencia mínima de la Inversión en cuotas:
                      </strong>{" "}
                      1 día
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Perfil Inversor:
                      </strong>{" "}
                      Invesores conservadores que desean un rendimiento
                      atractivo en Bs, y alta disponibilidad de sus recursos
                    </li>
                  </ol>
                  <div className="price-btn">
                    <a href="">Solicitar</a>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
