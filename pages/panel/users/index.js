import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";
import AdminContainer from "../layout/container";
import CheckIcon from "../../../components/ui/icons/check";
import LoadingIcon from "../../../components/ui/icons/check";
import UIModal from "../ui/modal";
import { Col, Row, Table, Button } from "reactstrap";

export default function Users(props) {
  const { data, error } = props;
  const router = useRouter();
  console.log({ data, error })
  let Users = [];

  //modal controls
  const [uuid, setUUID] = useState("");
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const toggle = () => setModal(!modal);

  const refreshData = () => {
    router.replace(router.asPath);
  }
  const updateRecord = (id) => {}
  const removeRecord = (e,id) => {
    e.preventDefault();
    setModalContent("¿Está seguro?");
    setModal(true);
    setUUID(id);
  }
  const handleDelete = async (d) => {
    console.log(d);
    
    setModalContent(<LoadingIcon />);
      //POST form values
      const res = await fetch("/api/users/"+uuid, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uuid
        }),
      });

      //workflow success or fail
      if (res.status < 300) {
        setModalContent(<CheckIcon />);
        refreshData();
        setTimeout(() => {
          toggle()
        }, 1000);
      } else {
        setModalContent("No se pudo eliminar, por favor intente de nuevo");
      }
      setModal(true);
  }
  if (typeof error == "undefined") {
    if (data.length > 0) {
      Users = data.map((item) => {
        return (
        <tr>
          <th scope="row">
            <input type="checkbox" name="users[]" value={item.id} />
          </th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>
            <button className="btn btn-default" onClick={(e)=>{updateRecord(e, item.id)}}>
              <i className="fa fa-edit"></i>
            </button>
            <button className="btn btn-default" onClick={(e)=>{removeRecord(e, item.id)}}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
        );
      });
      console.log( {Users} )
    } else {
      Users = (
        <tr>
          <td colSpan="4">No se encontraron registros</td>
        </tr>
      );
    }
  } else {
    Users = (
      <tr>
        <td colSpan="4">{error}</td>
      </tr>
    );
  }

  
  return (
    <AdminContainer>
      <h1>Usuarios</h1>
      
      <UIModal props={{title:"Hola", content:modalContent, btnAccept:handleDelete, btnCancel:toggle, toggle, modal}} />

      <Row>
        <Link href="/panel/users/create" passHref={true}>
          <Button className="btn btn-default" color="primary">Crear Usuario</Button>
        </Link>
      </Row>
      <Table hover>
        <thead>
          <tr>
            <th> </th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{Users}</tbody>
      </Table>
    </AdminContainer>
  );
}

export async function getServerSideProps(ctx) {
  const { req, res, params } = ctx;

  let r = await fetch("http://localhost:3000/api/users");

  if (r.status === 500) {
    return {
      props: {
        data: [],
        error: "No hay conexión con el servidor",
      },
    };
  }

  if (r.status === 404) {
    return {
      props: {
        data: [],
        error: "HTTP 404: Not found /api/users",
      },
    };
  }

  let data = await r.json();

  return {
    props: {
      data,
    },
  };
}
