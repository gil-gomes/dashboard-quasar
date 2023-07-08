import { api } from 'src/boot/axios';
import {
  CommentInterface,
  PostInterface,
  ProductInterface,
  UserInterface,
} from 'src/interfaces/ApiInterface';

const getComments = async (): Promise<CommentInterface> => {
  return await api.get('/comments').then((response) => {
    return response.data;
  });
};

const getPosts = async (): Promise<PostInterface> => {
  return await api.get('/posts').then((response) => {
    return response.data;
  });
};

const getUsers = async (): Promise<UserInterface> => {
  return await api.get('/users').then((response) => {
    return response.data;
  });
};

const getProducts = async (): Promise<ProductInterface> => {
  return await api.get('/products').then((response) => {
    return response.data;
  });
};

export const cardsService = {
  getComments,
  getPosts,
  getUsers,
  getProducts,
};
