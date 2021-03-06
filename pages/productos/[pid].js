import { useRouter } from "next/router";
import Container from "../../components/layout/container";
import Calculator from "../../components/calculator";
import Link from "next/link";
import Img from "../../components/image";

const message = "Deseo solicitar información sobre GanaRendimiento";

const products = {
  "gana-rendimiento": {
    title: "GanaRendimiento - FIA",
    bajada: "La opción acertada de Invertir en Bs y contar con liquidez inmediata",
    image:"rendimiento.png",
    prospecto: "/docs/PROSPECTO_GANARENDIMIENTO_2022.pdf",
    reglamento: "/docs/Reglamento_GanaRendimiento_2022.pdf", 
    clase : "",
  },
  "gana-inversiones": {
    title: "GanaInversiones - FIA",
    bajada: "La alternativa perfecta para invertir en USD y tener disponibilidad de tus recursos.",
    image:"inversiones.png",
    prospecto: "/docs/PROSPECTO_GanaInversiones_FIA_Definitivo_17092021.pdf",
    reglamento: "/docs/Reglamento_GanaInversiones_23_08_2021_VF.pdf", 
    clase : ""
  },
};

const ContentGanaInversiones = (
  <div className="col-md-6 col-sm-6  col-xs-12">
    <div className="table-list">
      <div className="top-price-inner">
        
        <Img s="logoinversiones.png" a="Ganasafi" w="500px" />
        <br/><br/>
        <div className="rates">
          Moneda: <span className="users">Dólares</span>
        </div>
      </div>
      <ol>
        <li className="">
          <strong>
            Inversiones a Corto Plazo concentradas en USD, perfil conservador
          </strong>
        </li>
        <li className="check">
          <strong className="text-light-green">
           Calificación de Riesgo
          </strong>{" "}
          AA3
        </li>
        <li className="check">
          <strong className="text-light-green">Monto mínimo de inversión:</strong> USD
          100
        </li>
        <li className="check">
          <strong className="text-light-green">Rescates permitidos:</strong> <br/>Sin
          Restricciones. <br/>Sin previa notificación USD 100.000
        </li>
        <li className="check">
          <strong className="text-light-green">Política de rescate:</strong> <br/>Con
          Con 3 dias hábiles de notificación de $us. 100.001 a $us.500.000
          <br/>Con 4 días hábiles mayores a $us. 500.000
        </li>
        <li className="check">
          <strong className="text-light-green">
            Permanencia mínima de la Inversión en cuotas:
          </strong>{" "}
          1 día
        </li>
        <li className="check">
          <strong className="text-light-green">Perfil Inversor:</strong>{" "}
          Inversionistas conservadores que desean un rendimiento atractivo en USD, y
          alta disponibilidad de sus recursos
        </li>
        <li className="check">
                      <strong className="text-light-green">
                        Beneficios:
                      </strong>{" "}<br/>
                      • Transaccionalidad a través de las Oficinas del Banco Ganadero a nivel Nacional<br/>
                      • Emisión de Cheques sin Costo<br/>
                      • Transferencias ACH<br/>
                      • Recepción y Envíos de Transferencias del Exterior <br/>
                      • Tarjeta de Débito para Personas Naturales<br/>

                    </li>
      </ol>

      <table border="1" className="table-rendimientos">
                    <tbody >
                        <tr>
                            <th>
                                GanaInversiones FIA
                            </th>
                            <th>
                                A 30 días
                            </th>
                            <th>
                                A 90 días   
                            </th>
                            <th>
                                A 180 días   
                            </th>
                            <th>
                                A 360 días   
                            </th>
                        </tr>
                        <tr>
                            <td>
                                Tasas de interés al 23/5/22
                            </td>
                            <td>
                                1.01%
                            </td>
                            <td>
                                1.31%
                            </td>
                            <td>
                                1.52%
                            </td>
                            <td>
                                -
                            </td>
                        </tr>
                    </tbody>
                    </table>
      
      <div className="price-btn">
        <Link
          href={{
            pathname: "/contacto",
            query: {
              message,
            },
          }}
          as={`/contacto?m=${encodeURIComponent(message)}`}
        >
          <a>Solicitar</a>
        </Link>
      </div>
    </div>
  </div>
);

const ContentGanaRendimiento = (
  <div className="col-md-7 col-sm-6 col-xs-12">
    <div className="table-list">
      <div className="top-price-inner">
        <Img s="logorendimiento.png" a="Ganasafi" w="500px" />
        <br/><br/>
        <div className="rates">
          Moneda: <span className="users">Bolivianos</span>
        </div>
      </div>
      <ol>
        <li className="">
          <strong>
            Inversiones a Corto Plazo concentradas en Bs, perfil conservador
          </strong>
        </li>
        <li className="check">
          <strong className="text-light-green">
           Calificación de Riesgo
          </strong>{" "}
          AA3
        </li>
        <li className="check">
          <strong className="text-light-green">Monto mínimo de inversión:</strong> Bs.
          1000
        </li>
        <li className="check">
          <strong className="text-light-green">Rescates permitidos:</strong> <br/>Sin
          Restricciones. <br/>Sin previa notificación Bs. 700.000
        </li>
        <li className="check">
          <strong className="text-light-green">Política de rescate:</strong><br/> Con
          Con 3 dias hábiles de notificación de bs. 700.001 a Bs. 3.500.000
          <br/>
          Con 4 días hábiles mayores a Bs.3.500.001
        </li>
        <li className="check">
          <strong className="text-light-green">
            Permanencia mínima de la Inversión en cuotas:
          </strong>{" "}
          1 día
        </li>
        <li className="check">
          <strong className="text-light-green">Perfil Inversor:</strong>{" "}
          Inversionistas conservadores que desean un rendimiento atractivo en Bs, y
          alta disponibilidad de sus recursos
        </li>
        <li className="check">
          <strong className="text-light-green">
            Beneficios:
          </strong>{" "}<br/>
          • Transaccionalidad a través de las Oficinas del Banco Ganadero a nivel Nacional<br/>
          • Emisión de Cheques sin Costo<br/>
          • Transferencias ACH<br/>
          • Tarjeta de Débito para Personas Naturales<br/>

        </li>
      </ol>

      <table border="1" className="table-rendimientos">
        <tbody >
            <tr>
                <th>
                    GanaRendimientos FIA
                </th>
                <th>
                    A 30 días
                </th>
                <th>
                    A 90 días   
                </th>
                <th>
                    A 180 días   
                </th>
                <th>
                    A 360 días   
                </th>
            </tr>
            <tr>
                <td>
                    Tasas de interés al 23/5/22
                </td>
                <td>
                   2.94%
                </td>
                <td>
                    2.84%
                </td>
                <td>
                    -
                </td>
                <td>
                    -
                </td>
            </tr>
        </tbody>
        </table>


      <div className="price-btn">
       <Link
          href={{
            pathname: "/contacto",
            query: {
              message,
            },
          }}
          as={`/contacto?m=${encodeURIComponent(message)}`}
        >
          <a>Solicitar</a>
        </Link>
      </div>
    </div>
  </div>
);

export default function Producto({ data }) {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Container>
      <div className="pricing-area  gray area-padding-3">
        <div className="container">
          <div className="row">
            <div className="pricing-content">
              <div className="col-md-5 col-sm-6  col-xs-12">
                <div className="section-headline text-left">
                  <h3 className="text-light-green">
                    Comienza a invertir tu dinero con GanaSafi
                  </h3>
                  <div className="row">
                    <div className="col-sm-2 col-xs-2">
                      <Img s={products[pid].image} a={`products[pid].title`} w="60px" />
                    </div>
                    <div className="col-sm-10 col-xs-10">
                      <p>

                   {products[pid].bajada}
                   
                  
                    

                  </p>
                    </div>
                  </div>

                  
                  <hr />
                  <div className={products[pid].clase} >
                  <p>
                    <strong>Reglamento interno</strong>
                  </p>

                  
                    <a rel="noreferrer" target="_blank" href={products[pid].reglamento} className="text-green">
                      <u>Descargar Reglamento</u>
                    </a>
                  

                    <hr />
                  </div>
                  <div className={products[pid].clase} >
                  <p>
                    <strong>Prospecto</strong>
                  </p>
                 
                    <a rel="noreferrer" target="_blank" href={products[pid].prospecto} className="text-green">
                      <u>Descargar Prospecto</u>
                    </a>
                  </div>
                 
                </div>
              </div>

              {pid == "gana-rendimiento" && ContentGanaRendimiento}
              {pid == "gana-inversiones" && ContentGanaInversiones}
            </div>
          </div>
        </div>
      </div>
      <div className="banner-area area-padding" id="simulador">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
              <div className="banner-all area-80 text-center">
                <div className="banner-content">
                  <h3>Simula tu inversión</h3>
                  <br />
                  <Calculator data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const { pid } = params;
  let data = {};
  const PORT = process.env.PORT ?? 3000;
  const baseurl = process.env.BASE_URL + ":" + PORT;
  let r = await fetch(baseurl + '/api/products/?where={"slug":"' + pid + '"}');

  if (r.status < 300) {
    let d = await r.json();
    data = d.length > 0 ? d[0] : {};
  }

  //simulating product not found after db request
  if (typeof products[pid] == "undefined") {
    return {
      notFound: true,
    };
  }

  data = { ...data, ...products[pid] };

  return {
    props: {
      data,
    },
  };
}
