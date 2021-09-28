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
  Select,
  FormText,
} from "reactstrap";

const actions = {
  create: {
    children: (props) => {
      const handleTitle = (e) => {
        props.setTitle(e.currentTarget.value);
      };

      const handleDesc = (e) => {
        props.setDesc(e.currentTarget.value);
      };

      const handleSlug = (e) => {
        props.setSlug(e.currentTarget.value);
      };

      const handleRate = (e) => {
        props.setRate(e.currentTarget.value);
      };

      const handleCurrencySymbol = (e) => {
        props.setCurrencySymbol(e.currentTarget.value);
      };

      const handleCurrencyRate = (e) => {
        props.setCurrencyRate(e.currentTarget.value);
      };

      return (
        <Form>
          <h2>Crear Producto</h2>
          <hr />
          <FormGroup>
            <Label for="title">Título</Label>
            <Input
              type="title"
              name="title"
              id="title"
              value={props.title}
              onChange={handleTitle}
              placeholder="Ingresa el título"
            />
          </FormGroup>
          <FormGroup>
            <Label for="slug">Slug</Label>
            <Input
              type="slug"
              name="slug"
              id="slug"
              value={props.slug}
              onChange={handleSlug}
            />
          </FormGroup>
          <FormGroup>
            <Label for="rate">Tasa de Interés</Label>
            <Input
              type="number"
              name="rate"
              id="rate"
              value={props.rate}
              onChange={handleRate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="currencySymbol">Moneda</Label>
            <Input
            type="select"
              id="currencySymbol"
              name="currencySymbol"
              onChange={handleCurrencySymbol}
              value={props.currencySymbol}
            >
              <option value="USD">USD</option>
              <option value="Bs.">BS.</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="currencyRate">Tasa de Cambio</Label>
            <Input
              type="number"
              name="currencyRate"
              id="currencyRate"
              value={props.currencyRate}
              onChange={handleCurrencyRate}
            />
          </FormGroup>
          <FormGroup>
            <Label for="desc">Contenido</Label>
            <br />
            <textarea
              name="desc"
              id="desc"
              value={props.desc}
              onChange={handleDesc}
              placeholder="Contenido"
            ></textarea>
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
          <Link href="/panel/products" passHref={true}>
            <Button className="btn btn-default">Cancelar</Button>
          </Link>
        </Form>
      );
    },
    onSubmit: async (e, props) => {
      e.preventDefault();

      const { title, desc, slug, rate, currencySymbol, currencyRate, setFlag } =
        props;
        
      setFlag("none");

      //Validation
      if (!slug) {
        log("Invalid slug");
        return;
      }

      //POST form values
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          rate,
          currencySymbol,
          currencyRate,
        }),
      });

      //workflow success or fail
      if (res.status == 200) {
        //Await for data for any desirable next steps
        const r = await res.json();

        //some data process flow controls

        return {
          redirect: {
            destination: "/panel/products",
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

export default function Products(props) {
  const router = useRouter();
  const { pid } = router.query;
  const { children } = actions[pid];

  const [flag, setFlag] = useState("success");
  const [error, setError] = useState("No hay conexión con el servidor");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [slug, setSlug] = useState("");
  const [rate, setRate] = useState(0);
  const [currencySymbol, setCurrencySymbol] = useState("USD");
  const [currencyRate, setCurrencyRate] = useState(1);

  switch (pid) {
    case "create":
      props = {
        ...props,

        title,
        setTitle,

        desc,
        setDesc,

        slug,
        setSlug,

        rate,
        setRate,

        currencySymbol,
        setCurrencySymbol,

        currencyRate,
        setCurrencyRate,

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
