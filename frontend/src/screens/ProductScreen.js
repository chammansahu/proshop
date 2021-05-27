import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Rating";
//import products from "../products";
import axios from 'axios'
const ProductScreen = ({ match }) => {
  //sttic data
  // const product = products.find((p)=>p._id===match.params.id)
  
  const [product, setProduct] = useState({})
    useEffect(() => {
      const fetchProduct = async () => {
        const { data } = await axios.get(`/api/products/${match.params.id}`);
        setProduct(data);
      };
      fetchProduct();
    }, [match]);
  return (
    <>
      <Link to='/' className="btn btn-dark my-3 ">Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item as="h4">${product.price}</ListGroup.Item>
            <ListGroup.Item as="p">{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <table className="table table-bordered">
              <tr>
                <th>Price:</th>
                <td>{product.price}</td>
              </tr>

              <tr>
                <th>Status</th>
                <td>
                  {product.countInStock > 0 ? "in Stock" : "out of Stock"}
                </td>
              </tr>

              <tr>
                <th>Quantity</th>
                              <td><select>
                                  {[...Array(10).keys()].map((v)=>(
                                      <option value={v+1} >{v+1}</option>
                                   ))}
                        </select></td>
                          </tr>
                          <tr>
                              <Button>Add to Cart</Button>
                          </tr>
            </table>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
