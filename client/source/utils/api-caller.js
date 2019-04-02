import { apiConfig } from 'Constants';

const { API_URL, API_KEY } = apiConfig;

function apiCaller(endpoint, method, body, headers) {
  const requestOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'appkey': API_KEY,
      ...headers
    },
    body: JSON.stringify(body)
  };

  return fetch(`${API_URL}/${endpoint}`, requestOptions)
    .then(handleResponse)
}


function handleResponse(response) {
  if (!response.ok) {
    const error = response.statusText;
    throw new Error(error);
  }
  return response.json();
}


export { apiCaller };