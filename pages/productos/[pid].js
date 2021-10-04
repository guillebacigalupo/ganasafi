import { useRouter } from "next/router";
import Container from "../../components/layout/container";
import Calculator from "../../components/calculator";
import Link from "next/link";

const message = "Deseo solicitar infomación sobre GanaRendimiento";

const products = {
  "gana-rendimiento": {
    title: "GanaRendimiento - FIA",
  },
  "gana-inversiones": {
    title: "GanaInversiones - FIA",
  },
};

const ContentGanaInversiones = (
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
            Inversiones a Corto Plazo concentradas en USD, perfil conservador
          </strong>
        </li>
        <li className="check">
          <strong className="text-light-green">Monto de apertura:</strong> USD
          100
        </li>
        <li className="check">
          <strong className="text-light-green">Rescates permitidos:</strong> Sin
          Restricciones. Sin previa notificación $us. 100.000
        </li>
        <li className="check">
          <strong className="text-light-green">Política de rescate:</strong> Con
          3 dias hábiles de notificación de $us. 100.001 a $us.500.000 <br />
          Con 4 días hábiles mayores a $us. 500.000
        </li>
        <li className="check">
          <strong className="text-light-green">
            Permanencia mínima de la Inversión en cuotas:
          </strong>{" "}
          1 día
        </li>
        <li className="check">
          <strong className="text-light-green">Perfil Inversor:</strong>{" "}
          Invesores conservadores que desean un rendimiento atractivo en USD, y
          alta disponibilidad de sus recursos
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
);

const ContentGanaRendimiento = (
  <div className="col-md-7 col-sm-6 col-xs-12">
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
            Inversiones a Corto Plazo concentradas en Bs y también en USD,
            perfil conservador
          </strong>
        </li>
        <li className="check">
          <strong className="text-light-green">Monto de apertura:</strong> Bs.
          1000
        </li>
        <li className="check">
          <strong className="text-light-green">Rescates permitidos:</strong> Sin
          Restricciones. sin previa notificación Bs. 700.000
        </li>
        <li className="check">
          <strong className="text-light-green">Política de rescate:</strong> Con
          3 dias hábiles de notificación de bs. 700.001 a Bs. 3.500.000 <br />
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
          Invesores conservadores que desean un rendimiento atractivo en Bs, y
          alta disponibilidad de sus recursos
        </li>
      </ol>
      <div className="price-btn">
        <a href="">Solicitar</a>
      </div>
    </div>
  </div>
);

export default function Producto({ data }) {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Container>
      <div className="pricing-area area-padding-3">
        <div className="container">
          <div className="row">
            <div className="pricing-content">
              <div className="col-md-5 col-sm-6  col-xs-12">
                <div className="section-headline text-left">
                  <h3 className="text-light-green">
                    Comienza a invertir tu dinero con GANASAFI
                  </h3>

                  <p>
                    Ganadero Sociedad Administradora de Fondos de Inversión S.A.
                    GanaSafi S.A. Es miembro del grupo Financiero Ganadero, nace
                    el año 2020, con la misión de Administrar Fondos de
                    Inversión que coadyuven activamente en el desarrollo
                    económico, financiero y social del país, fomentando el
                    ahorro interno nacional, facilitando económicamente la
                    creación, expansión y desarrollo de empresas nacionales
                  </p>
                  <hr />
                  <p>
                    <strong>Reglamento interno</strong>
                  </p>
                  <a className="text-green">
                    <u>Descargar reglamento</u>
                  </a>

                  <hr />
                  <p>
                    <strong>Prospecto</strong>
                  </p>
                  <a className="text-green">
                    <u>Descargar prospecto</u>
                  </a>
                </div>
              </div>
<<<<<<< Updated upstream

              <div className="col-md-7 col-sm-6 col-xs-12">
                <div className="table-list">
                  <div className="top-price-inner">
                    <div class="price-title dark">

                      <h4 className="">{data.title}</h4>
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
=======
              {pid == "gana-rendimiento" && ContentGanaRendimiento}
              {pid == "gana-inversiones" && ContentGanaInversiones}
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>
      <div className="banner-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
              <div className="banner-all area-80 text-center">
                <div className="banner-content">
                  <h3>Simulador de inversión</h3>
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
  let r = await fetch(
    process.env.BASE_URL + '/api/products/?where={"slug":"' + pid + '"}'
  );

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
