import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import Img from "../components/image";

export default function Contacts({ data }) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(router.query.m ?? "");
  const [responseMessage, setResponseMessage] = useState("");
  const [submitted, setSubmitted] = useState("false");
  console.log(message);

  const validateCaptcha = (response_key) => {
    return new Promise((resolve, reject) => {
      const secret_key = process.env.RECAPTCHA_SECRET;

      const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;

      fetch(url, {
        method: "post",
      })
        .then((response) => response.json())
        .then((google_response) => {
          if (google_response.success == true) {
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((err) => {
          console.log(err);
          resolve(false);
        });
    });
  };

  useEffect(() => {
    router.query.m && message == "" && setMessage(router.query.m);
  }, [router, message]);


    useEffect(()=>{
        if(!router.isReady) return;

       router.query.m && message == "" && setMessage(router.query.m);

    }, [router.isReady]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setResponseMessage("");

    let hasError = false;
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      message.trim().length === 0
    ) {
      hasError = true;
    }

    if (!hasError) {
      console.log("Sending");
      
      if (grecaptcha.getResponse() === "") {
        e.preventDefault();
        alert("Por favor valide el captcha");
      }

      let body = {
        name,
        email,
        message,
      };

      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Sent Email Succeess!");
          setSubmitted("true");
          setName("");
          setEmail("");
          setBody("");
          setResponseMessage(
            "Su mensaje se ha enviado statisfactoriamente."
          );
        } else {
          setSubmitted("false");
          setResponseMessage(
            "Ooops! Hubo una falla al enviar su mensaje, por favor intente de nuevo"
          );
        }
      });
    } else {
      setResponseMessage(
        "Ooops! Debes rellenar todos los campos con los datos correctos"
      );
    }
  };

  return (
    <>
      <div className="contact-area area-padding pt130">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h3 className="text-light-green">Contáctanos</h3>
                <p>¿No sabes como invertir?, contáctate con un asesor a través de las sucursales del Banco Ganadero como canal de distribución de los fondos.
</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="contact-inner">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                      <Img s="celular.png" a="Ganasafi" w="80px" />
                      <br/><br/>
                      <p>
                        <strong>La Paz:</strong> (591) 2-2173000
                        <br />
                        Interno: 3350 - 3330
                        <br />
                        <strong>Cochabamba:</strong> (591) 4-4173000
                        <br />
                        Interno: 3437 - 3430
                        <br />
                        <strong>Santa Cruz:</strong> (591) 317-0400
                        <br />
                        Internos: 3095 – 0468 – 0467
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                      <Img s="mail.png" a="Ganasafi" w="80px" />
                      <br/><br/>
                      <p>
                        <strong>Email:</strong> informaciones@ganasafi.com.bo
                      
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="contact-icon text-center">
                    <div className="single-icon">
                      <Img s="ubicacion.png" a="Ganasafi" w="80px" />
                      <br/><br/>
                      <p>
                        <strong>Santa Cruz: </strong>
                        
                        Calle Murillo No 89 esq. Bolívar
                      </p>
                      <p>
                        <strong>La Paz: </strong>
                        
                        Sucursal La Paz Av. Camacho N° 1372, Zona Central
                      </p>
                      <p>
                        <strong>Cochabamba: </strong>
                        
                        Sucursal Cochabamba Av. Ayacucho Nº 174 – Edificio María Antonieta - PB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
              <div className="col-md-12 col-xs-12">
                <div className="contact-form">
                  <div className="row">
                    <form
                      id="contactForm"
                      method="POST"
                      className="contact-form"
                    >
                      <div className="col-xs-12">
                        <h5 className="text-light-green">
                          Envíanos un mensaje
                        </h5>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Nombre"
                          required
                          data-error="Ingresa tu nombre"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <input
                          type="email"
                          name="email"
                          className="email form-control"
                          id="email"
                          placeholder="Email"
                          required
                          data-error="Ingresa tu email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <textarea
                          id="message"
                          name="message"
                          rows="7"
                          placeholder="Mensaje"
                          className="form-control"
                          required
                          data-error="Escribe aquí tu mensaje"
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                          value={message}
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="col-md-12 col-sm-12 col-xs-12 text-center">
                        <div id="msgSubmit" className="h3 text-center">
                          {responseMessage}
                        </div>
                        <div className="clearfix"></div>
                        {/*<ReCAPTCHA size="normal" sitekey="<YOUR SITE KEY>" />*/}

                        <div className="clearfix"></div>
                        <button
                          onClick={(e) => {
                            handleSubmit(e);
                          }}
                          type="submit"
                          id="submit"
                          submitted={submitted}
                          className="add-btn contact-btn"
                        >
                          Enviar mensaje
                        </button>
                      </div>
                    </form>
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
