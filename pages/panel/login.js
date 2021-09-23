import { useState, useEffect, useRef } from "react";
import { getSession } from "next-auth/client";
import Container from "../../components/layout/container";
import { log, encrypt, decrypt } from "../../utils/common";

log(encrypt('hola'));

export default function Login(data) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [encryptedPwd, setEncryptedPwd] = useState("");

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  console.log(data);
  const { session } = data;

  const onSubmit = async (e) => {
    e.preventDefault();

    //Validation
    if (!email || !email.includes("@") || !password) {
      log("Invalid details");
      return;
    }
    let pass = inputPassword.current.value;
    let encrypted = encrypt(pass);
    setPassword(pass);
    setEncryptedPwd(encrypted);
    log({ password: encrypted });
    log({ password: decrypt(encrypted) });

    //POST form values
    const res = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password: encryptedPwd,
      }),
    });

    //Await for data for any desirable next steps
    const r = await res.json();

    //workflow success or fail 
    console.log({r});
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.currentTarget.value);
  };
  
  if (!session) {
    // If no session exists, display login form
    return (
      <Container pageProps={{ session: 0 }}>
        <div className="login-area area-padding-2 pt130">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <img src="../../img/logo/logo.png" alt="Login" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                    ref={inputEmail}
                  />
                  <input
                    type="password"
                    className="form-control"
                    placeholder="********"
                    value={password}
                    onChange={handlePassword}
                    ref={inputPassword}
                  />
                  <button onClick={onSubmit}>Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  } else {
    //redirect to panel dashboard
    return (
      <>
        <div>Redirecting to Dashboard...</div>
      </>
    );
  }
}
