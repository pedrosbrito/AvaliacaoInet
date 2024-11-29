// src/pages/Products.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => setProducts(response.data));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      });
  };

  return (
    <Container>
      <h2 className="text-center mt-4">Produtos</h2>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4}>
            <ProductCard product={product} onDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;

