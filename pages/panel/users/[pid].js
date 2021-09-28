import React, { useState, useEffect, memo, useRef } from "react";
import { useRouter } from "next/router";
import AdminContainer from "../layout/container";
import { log, encrypt, decrypt, getCookie } from "../../../utils/common";
import Link from "next/link";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
  FormText,
} from "reactstrap";

const actions = {
  create: {
    children: (props) => {
      const handleName = (e) => {
        props.setName(e.currentTarget.value);
      };

      const handleEmail = (e) => {
        props.setEmail(e.currentTarget.value);
      };

      const handlePassword = (e) => {
        props.setPassword(e.currentTarget.value);
      };

      return (
        <Form>
          <h2>Crear Usuario</h2>
          <hr />
          <FormGroup>
            <Label for="name">Nombre</Label>
            <Input
              type="name"
              name="name"
              id="name"
              value={props.name}
              onChange={handleName}
              placeholder="Ingresa tu nombre"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={props.email}
              onChange={handleEmail}
              placeholder="demo@demo.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={props.password}
              onChange={handlePassword}
              placeholder="********"
            />
          </FormGroup>
          <hr />
          {props.flag == "error" && (
            <>
              <span className="warning">{props.error}</span>
              <hr />
            </>
          )}
          <Button
            color="primary"
            onClick={(e) => {
              actions["create"].onSubmit(e, props);
            }}
          >
            Aceptar
          </Button>{" "}
          <Link href="/panel/users" passHref={true}>
            <Button className="btn btn-default">Cancelar</Button>
          </Link>
        </Form>
      );
    },
    onSubmit: async (e, props) => {
      e.preventDefault();

      const { name, email, password, setEncryptedPwd, setFlag } = props;

      setFlag("none");
      //Validation
      if (!email || !email.includes("@") || !password) {
        log("Invalid details");
        return;
      }

      let encrypted = encrypt(password);

      setEncryptedPwd(encrypted);

      //POST form values
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password: encrypted,
        }),
      });

      //workflow success or fail
      if (res.status == 200) {
        //Await for data for any desirable next steps
        const r = await res.json();

        //some data process flow controls 
        
        return {
          redirect: {
            destination: "/panel/users",
            permanent: false,
          },
        };
      } else {
        setFlag("error");
      }
    },
  },
  update: {},
};

export default function Users(props) {
  const router = useRouter();
  const { pid } = router.query;
  const { children } = actions[pid];

  const [flag, setFlag] = useState("success");
  const [error, setError] = useState("No hay conexión con el servidor");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [encryptedPwd, setEncryptedPwd] = useState("");

  switch (pid) {
    case "create":
      props = {
        ...props,
        email,
        name,
        password,
        encryptedPwd,
        setEmail,
        setName,
        setPassword,
        setEncryptedPwd,
        flag,
        setFlag,
        error,
        setError,
      };
      break;
  }

  return <AdminContainer>{children(props)}</AdminContainer>;
}

export async function getServerSideProps({ params }) {
  const { pid } = params;

  const data = { pid };

  return {
    props: {
      data,
    },
  };
}
