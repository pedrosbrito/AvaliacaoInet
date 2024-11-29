import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const ProductAdd = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleAddProduct = (e) => {
    e.preventDefault(); // Para evitar o comportamento padrão do formulário

    const newProduct = { name, price, type, image };

    axios.post('http://localhost:5000/products', newProduct)
      .then(() => {
        alert('Produto adicionado com sucesso!');
        navigate('/products'); // Redireciona para a página de produtos
      })
      .catch((error) => {
        console.error("Erro ao adicionar produto:", error);
        alert('Erro ao adicionar o produto');
      });
  };

  return (
    <Container className="form-container">
      <h2>Cadastrar Produto</h2>
      <Form onSubmit={handleAddProduct}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Preço</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tipo</Form.Label>
          <Form.Control
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Imagem</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" className="btn-custom w-100">Cadastrar Produto</Button>
      </Form>
    </Container>
  );
};

export default ProductAdd;
