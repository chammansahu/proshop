import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";

//import products from "../products";
import { listProductDetails } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const ProductScreen = ({ match }) => {
 
   const [qty, setQty] = useState(0)
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [match, dispatch]);

  return (
    <>
      <Link to="/" className="btn btn-dark my-3 ">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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

                {product.countInStock > 0 && (
                  <tr>
                    <th>Quantity</th>
                    <td>
                      <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                        {[...Array(product.countInStock).keys()].map((v) => (
                          <option value={v + 1}>{v + 1}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                )}
                <tr>
                  <Button
                    size="sm"
                    variant="outline-dark"
                    disabled={product.countInStock === 0}
                  >
                    Add to Cart
                  </Button>
                </tr>
              </table>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
