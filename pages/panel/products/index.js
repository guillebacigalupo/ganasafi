import AdminContainer from "../layout/container";
import { Col, Row, Table, Button } from "reactstrap";
import Link from "next/link";

export default function Products(props) {
  const { data, error } = props;
  
  let Products = [];
  
  const updateRecord = (id) => {}
  const removeRecord = (id) => {}

  if (typeof error == "undefined") {
    if (data.length > 0) {
      Products = data.map((item) => {
        <tr>
          <th scope="row">
            <input type="checkbox" name="products[]" value={item.id} />
          </th>
          <td>{item.title}</td>
          <td>{item.rate}</td>
          <td>{item.currencySymbol}</td>
          <td>{item.currencyRate}</td>
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
      Products = (
        <tr>
          <td colSpan="4">No se encontraron registros</td>
        </tr>
      );
    }
  } else {
    Products = (
      <tr>
        <td colSpan="4">{error}</td>
      </tr>
    );
  }

  return (
    <AdminContainer>
      <h1>Productos</h1>

      <Row>
        <Link href="/panel/products/create" passHref={true}>
          <Button className="btn btn-default" color="primary">
            Crear Producto
          </Button>
        </Link>
      </Row>
      <Table hover>
        <thead>
          <tr>
            <th> </th>
            <th>Título</th>
            <th>Tasa Interés %</th>
            <th>Moneda</th>
            <th>Tasa Cambio</th>
          </tr>
        </thead>
        <tbody>{Products}</tbody>
      </Table>
    </AdminContainer>
  );
}

export async function getServerSideProps(ctx) {
  const { req, res, params } = ctx;

  let r = await fetch("http://localhost:3000/api/products");

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
