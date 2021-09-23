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
                <h3 className="text-green">Nuestros productos</h3>
                <p>
                  Seguro tenemos un producto para ti. Elige el que mas se adapte
                  a tu perfil y necesidades.
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
                      <strong>GanaRendimiento</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam sit amet tortor imperdiet, pulvinar elit vel,
                      posuere risus. Curabitur.
                    </p>

                    <a
                      className="ab-btn left-ab-btn btn-service"
                      href="producto.html"
                    >
                      Quiero saber más
                    </a>
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
                      <strong>GanaInversiones</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam sit amet tortor imperdiet, pulvinar elit vel,
                      posuere risus. Curabitur.
                    </p>

                    <a
                      className="ab-btn left-ab-btn btn-service"
                      href="producto.html"
                    >
                      Quiero saber más
                    </a>
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
