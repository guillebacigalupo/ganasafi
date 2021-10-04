import Link from "next/link";

export default function OurProducts({ data }) {
  const { standalone } = data;
  return (
    <>
      <div
        className={
          `about-area bg-color fix area-padding` + (standalone ? " pt130" : "")
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h3 className="text-green">Fondos de inversión</h3>
                <p>
                  Tu confianza, nuestro compromiso.<br/>Invierte en el fondo que más se adapte a tu perfil, objetivos y necesidades.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="support-all">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="support-services wow ">
                  <a className="support-images" href="#">
                    <i className="flaticon-like-2"></i>
                  </a>
                  <div className="support-content">
                    <h4 className="text-light-green">
                      <strong>GanaRendimiento - FIA</strong>
                    </h4>
                    <p>
                     La alternativa perfecta para invertir en BS y tener disponibilidad de tus recursos.
                    </p>

                    <Link href="/productos/gana-rendimiento">
                      <a className="ab-btn left-ab-btn btn-service">
                        Quiero saber más
                      </a>
                    </Link>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="support-services wow ">
                  <a className="support-images" href="#">
                    <i className="flaticon-like-3"></i>
                  </a>
                  <div className="support-content">
                    <h4 className="text-light-green">
                      <strong>GanaInversiones - FIA</strong>
                    </h4>
                    <p>
                     La alternativa perfecta para invertir en USD y tener disponibilidad de tus recursos.
                    </p>

                    <Link href="/productos/gana-inversiones">
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
      </div>
    </>
  );
}
