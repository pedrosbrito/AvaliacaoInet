import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "docemel@sodoce.com.br" && password === "brigadeiro123") {
      navigate('/products');  // Corrigido para usar navigate() diretamente
    } else {
      setError("Credenciais inválidas.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#ffcbdb" }}>
      <Form onSubmit={handleLogin} className="p-4 rounded shadow-lg" style={{ width: '400px', backgroundColor: 'white' }}>
        <h2 className="text-center mb-4">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>
        <Button type="submit" className="w-100 mt-3">Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
