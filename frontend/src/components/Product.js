import React from "react";
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { addToCart } from "../actions/cartActions";
// import { useDispatch, useSelector } from "react-redux";
import Rating from "./Rating";
const Product = ({product}) => {

  
  // const dispatch = useDispatch();


    return (
      <Card className="my-3 p-3 rounded">
        <Link to={`/products/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/products/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <Button
            onClick={dispatch(addToCart(product._id,1))}
            size="sm"
            variant="outline-dark"
            disabled={product.countInStock === 0}
          >
            Add to Cart
          </Button>
        </Card.Footer> */}
      </Card>
    );
}

export default Product
