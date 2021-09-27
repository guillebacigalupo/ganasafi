import Container from "../components/layout/container";
import Img from "../components/image";

export default function QuienesSomos() {
  return (
    <Container>
      <div className="pricing-area area-padding-3">
        <div className="container">
          <div className="row">
            <div className="pricing-content">
              <div className="col-md-8 col-md-offset-2 col-sm-6  col-xs-12">
                <div className="text-left">
                  <h3 className="text-light-green">Sobre GANASAFI</h3>

                  <img
                    src="https://via.placeholder.com/800x400"
                    className="img-responsive"
                  />
                  <br />

                  <h3>Ganasafi</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin in posuere magna. Proin nulla velit, auctor vitae
                    commodo sed, elementum a nibh. Vestibulum sit amet sapien
                    quis nisl pretium ultrices. Aliquam non porta ex. Cras sed
                    metus vestibulum, semper tortor sit amet, tincidunt purus.
                    Suspendisse potenti.
                  </p>
                  <hr />

                  <h3>Organigrama</h3>
                  <ul>
                    <li>Presidente: Juan Gonzales</li>
                    <li>Presidente: Juan Gonzales</li>
                    <li>Presidente: Juan Gonzales</li>
                    <li>Presidente: Juan Gonzales</li>
                  </ul>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
