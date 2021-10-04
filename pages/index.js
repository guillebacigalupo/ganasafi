import Container from "../components/layout/container";
import Slider from "../components/slider";
import OurProducts from "../components/our-products";
import HowTo from "../components/howto";
import Counter from "../components/counter";
import Comparator from "../components/comparator";
import Contacts from "../components/contacts";
import Img from "../components/image";

export default function Home({ sliders }) {
  let count = sliders.length;
  return (
    <Container>
      {count > 0 && <Slider sliders={sliders} />}

      <div className="feature-area bg-white fix area-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="feature-content">
                <div className="feature-images">
                  <Img s="feature/f1.png" a="Picture of the author" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="feature-text">
                <h3 className="text-green">¿Qué es GANASAFI?</h3>
                <p>
                  Ganadero Sociedad Administradora de Fondos de Inversión S.A.
                  GanaSafi S.A., miembros del grupo Financiero Ganadero, nace el
                  año 2020 con la misión de brindar alternativas de inversión en
                  el Mercado de Valores y constituirse en el corto plazo en una
                  empresa líder en la administración y distribución de Fondos de
                  Inversión.
                </p>
                <p>
                  Ganadero Sociedad Administradora de Fondos de Inversión S.A
                  (GanaSafi S.A) fue constituida el 8 de junio de 2020, con
                  Matricula de Comercio N° 00430634 de fecha 7 de Julio de 2020,
                  NIT No. 392615023 , e inscrita en el Registro de Mercado de
                  Valores en fecha 4 de noviembre de 2020 bajo el No.
                  SPVS-IV-SAF-SNA-002/2000, mediante resolución administrativa
                  No. ASFI/ 623/2020
                </p>
                <p>
                  El objeto social de GanaSafi S.A. es la prestación de
                  servicios de administración de Fondos de Inversión y realizar
                  actividades conexas, así como todas las operaciones,
                  actividades y servicios permitidos por la normativa para
                  Sociedades Administradoras de Fondos de Inversión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurProducts data={{ standalone: false }} />
      <HowTo />
      <Counter />
      <Comparator />
      <Contacts />
    </Container>
  );
}

export async function getServerSideProps(ctx) {
  const { req, res, params } = ctx;

  let r = await fetch(
    'http://localhost:3000/api/posts?where={"post_type":"slider"}'
  );

  let sliders = r.status === 200 ? await r.json() : [];
  return {
    props: {
      sliders,
    },
  };
}
