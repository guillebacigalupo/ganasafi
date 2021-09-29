import React, { useState, useEffect, memo } from "react";
import { useRouter } from "next/router";
import { encrypt, decrypt, getCookie, log } from "../../../utils/common";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";

/* Components */
import SideBar from "./sidebar";
import NavBar from "./navbar";

const storeLayout = {};

function AdminContainer(mainProps) {
  const router = useRouter();
  const { children } = mainProps;

  const [session, setSession] = useState();
  useEffect(
    () => {
      fetch("/api/auth/session")
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setSession(data);
          if (!data.user.id) {
            //TODO:logout and clean user data and cookies 
            //redirect to homepage
            setSession( {} );
            router.push('/');

          }
        });
    },
    [setSession]
  );

  return (
    <>
      <Head>
        <title>Admin | Ganasafi</title>

        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="/assets/static/css/animate.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/static/css/font-awesome.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/static/css/themify-icons.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/static/css/flaticon.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="/assets/static/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/assets/static/css/admin.css" rel="stylesheet" />
      </Head>
      <NavBar session={session} />
      <Container fluid className="wrapper">
        <Row>
          <Col className="wrapper-left">
            <SideBar session={session} />
          </Col>
          <Col className="wrapper-content">{children}</Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminContainer;
