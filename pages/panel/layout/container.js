import React, { useState, useEffect, memo } from "react";
import { signIn, signOut, useSession, getSession } from "next-auth/client";
import { log, encrypt, decrypt, getCookie } from "../../../utils/common";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";

/* Components */
import SideBar from "./sidebar";
import NavBar from "./navbar";

const storeLayout = {};

function AdminContainer(mainProps) {
  const { loading, session } = useSession();
  const { children } = mainProps;

  const props = { signIn, signOut, useSession, getSession };

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
      <NavBar props={props} />
      <Container fluid className="wrapper">
        <Row>
          <Col className="wrapper-left">
            <SideBar props={props} />
          </Col>
          <Col className="wrapper-content">{children}</Col>
        </Row>
      </Container>
    </>
  );
}

export async function getServerSideProps({ req, res, params }) {
  try {
    const session = await getSession(req, res);
    log({ session });
    const email = session?.user?.email;

    //if not valid session, redirect to login
    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    //check user permissions
    let permissions = null;
    if (!!User) {
      permissions = await User.getPermissions();
    }

    return {
      props: {
        session,
      },
    };
  } catch (e) {
    return new Error("Error: " + JSON.stringify(e));
  }
}

export default AdminContainer;
