import api from '../../../js/api.js';

// Redirect to login if no token is present
if (!api.getToken()) {
  window.location.href = 'auth-login.html';
}

const logoutBtn = document.getElementById('logout-button');
if (logoutBtn) {
  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    api.clearToken();
    window.location.href = 'auth-login.html';
  });
}

