const API = 'http://localhost:3001';
const headers = () => {
  const header = new Headers();
  header.append('Authorization', 'react-app-123');
  header.append('Content-Type', 'application/json');

  return header;
};

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
    // .then(res => res.json())
    .then(data => data);
