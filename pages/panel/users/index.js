import AdminContainer from "../layout/container";
import { Col, Row, Table, Button } from "reactstrap";
import Link from "next/link";

export default function Users(props) {
  const { data, error } = props;
  console.log(props);
  let Users = [];
  if (typeof error == "undefined") {
    if (data.length > 0) {
      Users = data.map((item) => {
        <tr>
          <th scope="row">
            <input type="checkbox" name="users[]" value={item.id} />
          </th>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>
            <button className="btn btn-default" onClick={updateRecord(item.id)}>
              <i className="fa fa-edit"></i>
            </button>
            <button className="btn btn-default" onClick={removeRecord(item.id)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>;
      });
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

  let data = await r.json();

  return {
    props: {
      data,
    },
  };
}
