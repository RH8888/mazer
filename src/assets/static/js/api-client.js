async function request(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Request failed: ' + response.status);
  }
  return response.json();
}

window.apiClient = {
  listAgents: () => request('/api/v1/admin/agents'),
  listPanels: () => request('/api/v1/admin/panels'),
  listServices: () => request('/api/v1/admin/services'),
  listSettings: () => request('/api/v1/admin/settings'),
};
