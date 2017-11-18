import { v1 } from 'uuid';

const API = 'http://localhost:3001';
const headers = () => {
  const header = new Headers();
  header.append('Authorization', 'react-app-123');
  header.append('Content-Type', 'application/json');

  return header;
};
export const getCategories = () =>
  fetch(`${API}/categories`, { method: 'GET', headers: headers() })
    .then(res => res.json())
    .then(data => data.categories);

export const getAllPosts = () =>
  fetch(`${API}/posts`, { method: 'GET', headers: headers() })
    .then(res => res.json())
    .then(data => data);

export const getPost = id =>
  fetch(`${API}/posts/${id}`, { method: 'GET', headers: headers() })
    .then(res => res.json())
    .then(data => data);

export const getComment = id =>
  fetch(`${API}/comments/${id}`, { method: 'GET', headers: headers() })
    .then(res => res.json())
    .then(data => data);

export const postPost = ({ id, timestamp, title, body, author, category }) => {
  const payLoad = {
    id: id || v1(),
    timestamp: timestamp || Date.now(),
    title,
    body,
    author,
    category,
  };
  return fetch(`${API}/posts`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(payLoad),
  })
    .then(res => res.json())
    .then(data => data);
};

export const votePost = (id, option) => {
  const payLoad = {
    option,
  };
  return fetch(`${API}/posts/${id}`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(payLoad),
  })
    .then(res => res.json())
    .then(data => data);
};

export const deletePost = id =>
  fetch(`${API}/posts/${id}`, { method: 'DELETE', headers: headers() })
    .then(res => res.json())
    .then(data => data);
