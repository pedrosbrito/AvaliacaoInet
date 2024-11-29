import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', 
});

// Função para obter todos os produtos
export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos", error);
    return [];
  }
};

// Função para criar um novo produto
export const createProduct = async (product) => {
  try {
    const response = await api.post('/products', product);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar produto", error);
  }
};

// Função para excluir um produto
export const deleteProduct = async (id) => {
  try {
    await api.delete(`/products/${id}`);
  } catch (error) {
    console.error("Erro ao excluir produto", error);
  }
};

// Função para editar um produto
export const editProduct = async (id, updatedProduct) => {
  try {
    const response = await api.put(`/products/${id}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error("Erro ao editar produto", error);
  }
};
