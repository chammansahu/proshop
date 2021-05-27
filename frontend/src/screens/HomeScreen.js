import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
//static data
//import products from "../products";
import Product from "../components/Product";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } =await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <main>
        <Header />

        <h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={3} xl={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Footer />
      </main>
    </>
  );
};

export default HomeScreen;
