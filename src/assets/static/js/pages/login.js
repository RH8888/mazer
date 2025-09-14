import api from '../../../js/api.js';

const form = document.getElementById('login-form');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
      const res = await api.post('/admin/token', { username, password });
      const token = res.token || res.access_token;
      if (!token) throw new Error('No token returned');
      api.setToken(token);
      window.location.href = 'index.html';
    } catch (err) {
      alert('Login failed');
    }
  });
}

