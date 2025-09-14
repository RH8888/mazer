import { API_BASE_URL } from './config.js';

let authToken = null;

export function setToken(token) {
  authToken = token;
}

export function getToken() {
  return authToken;
}

export function clearToken() {
  authToken = null;
}

async function request(method, endpoint, data) {
  const headers = {};
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }
  let body;
  if (data !== undefined) {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(data);
  }
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body,
  });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

export const get = (endpoint) => request('GET', endpoint);
export const post = (endpoint, data) => request('POST', endpoint, data);
export const put = (endpoint, data) => request('PUT', endpoint, data);
export const del = (endpoint) => request('DELETE', endpoint);

export default {
  get,
  post,
  put,
  del,
  setToken,
  getToken,
  clearToken,
};
