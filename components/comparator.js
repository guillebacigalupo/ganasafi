import {useEffect, useState, useCallback} from "react";
import Link from "next/link";
import { getProperties } from "../libs/services/properties";


const objectType = "settings";
const group = "rates";

export default function Comparator(props) {
    const [rates, setRates] = useState({});

    const getRates = useCallback(async () => {
      const res = await getProperties({
        objectId:0,
        objectType,
        group,
      });
      console.log(res);
      const r = {};
      res.map(item =>{
        r[item.key] = item;
      });
      setRates(r);
    },[setRates]);

  useEffect(() => {
    getRates();
  }, [getRates]);
  
  const message = "Deseo solicitar información sobre";

  return (
    <>
      <div className="pricing-area area-padding-2" id="comparador">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h3 className="text-white">Comparador de Fondos</h3>
                <p className="text-green">
                  Elige el fondo correcto que se adapte a tu perfil y
                  necesidades
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
                      Moneda: <span className="users">Dólares</span>
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
                        Calificación de Riesgo
                      </strong>{" "}
                      AA3
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Monto mínimo de Inversión
                      </strong>{" "}
                      $us. 100
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Rescates permitidos:
                      </strong>{" "}
                      <br />
                      Sin Restricciones.
                      <br /> Sin previa notificación $us. 100.000
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Política de rescate:
                      </strong>{" "}
                      <br />
                      Con 3 dias hábiles de notificación de $us. 100.001 a
                      $us.500.000
                      <br />
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
                      Inversionistas conservadores que desean un rendimiento
                      atractivo en USD, y alta disponibilidad de sus recursos
                    </li>
                    <li className="check">
                      <strong className="text-light-green">Beneficios:</strong>{" "}
                      <br />
                      • Transaccionalidad a través de las Oficinas del Banco
                      Ganadero a nivel Nacional
                      <br />
                      • Emisión de Cheques sin Costo
                      <br />
                      • Transferencias ACH
                      <br />
                      • Recepción y Envíos de Transferencias del Exterior <br />
                      • Tarjeta de Débito para Personas Naturales
                      <br />
                    </li>
                  </ol>

                  <table border="1" className="table-rendimientos">
                    <tbody>
                      <tr>
                        <th>GanaInversiones FIA</th>
                        <th>A 30 días</th>
                        <th>A 90 días</th>
                        <th>A 180 días</th>
                        <th>A 360 días</th>
                      </tr>
                      <tr>
                        <td>{rates["inversionesRateLastUpdate"]?.value ?? `Tasas de interés al 23/5/22`}</td>
                        <td>{rates["inversionesRate30"]?.value ?? `1.01`}</td>
                        <td>{rates["inversionesRate60"]?.value ?? `1.31`}</td>
                        <td>{rates["inversionesRate90"]?.value ?? `1.52`}</td>
                        <td>{rates["inversionesRate180"]?.value ?? `-`}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="price-btn">
                    <Link
                      href={{
                        pathname: "contacto/[message]",
                        query: {
                          message,
                        },
                      }}
                      as={`contacto?m=${encodeURIComponent(
                        message + " GanaInversiones"
                      )}`}
                    >
                      <a>Solicitar</a>
                    </Link>
                  </div>
                  <Link href="/productos/gana-inversiones">
                    <a className="ab-btn left-ab-btn btn-service">
                      Quiero saber más
                    </a>
                  </Link>
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
                        Inversiones a Corto Plazo concentradas en Bs.
                      </strong>
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Calificación de Riesgo
                      </strong>{" "}
                      AA3
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Monto mínimo de Inversión:
                      </strong>{" "}
                      Bs. 1000
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Rescates permitidos:
                      </strong>{" "}
                      <br />
                      Sin Restricciones.
                      <br />
                      Sin previa notificación Bs. 700.000
                    </li>
                    <li className="check">
                      <strong className="text-light-green">
                        Política de rescate:
                      </strong>{" "}
                      <br />
                      Con 3 dias hábiles de notificación de bs. 700.001 a Bs.
                      3.500.000
                      <br />
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
                      Inversionistas conservadores que desean un rendimiento
                      atractivo en Bs, y alta disponibilidad de sus recursos
                    </li>
                    <li className="check">
                      <strong className="text-light-green">Beneficios:</strong>{" "}
                      <br />
                      • Transaccionalidad a través de las Oficinas del Banco
                      Ganadero a nivel Nacional
                      <br />
                      • Emisión de Cheques sin Costo
                      <br />
                      • Transferencias ACH
                      <br />
                      • Tarjeta de Débito para Personas Naturales
                      <br />
                    </li>
                  </ol>

                  <table border="1" className="table-rendimientos">
                    <tbody>
                      <tr>
                        <th>GanaRendimientos FIA</th>
                        <th>A 30 días</th>
                        <th>A 90 días</th>
                        <th>A 180 días</th>
                        <th>A 360 días</th>
                      </tr>
                      <tr>
                        <td>{rates["rendimientoRateLastUpdate"]?.value ?? `Tasas de interés al 23/5/22`}</td>
                        <td>{rates["rendimientoRate30"]?.value ?? `2.94%`}</td>
                        <td>{rates["rendimientoRate60"]?.value ?? `2.84%`}</td>
                        <td>{rates["rendimientoRate90"]?.value ?? `-`}</td>
                        <td>{rates["rendimientoRate180"]?.value ?? `-`}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="price-btn">
                    <Link
                      href={{
                        pathname: "contacto/[message]",
                        query: {
                          message,
                        },
                      }}
                      as={`contacto?m=${encodeURIComponent(
                        message + " GanaRendimiento"
                      )}`}
                    >
                      <a>Solicitar</a>
                    </Link>
                  </div>

                  <Link href="/productos/gana-rendimiento">
                    <a className="ab-btn left-ab-btn btn-service">
                      Quiero saber más
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
