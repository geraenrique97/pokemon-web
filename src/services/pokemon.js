import httpClient from 'axios';

const API_ENDPOINT = 'http://localhost:8080/pokemon'

export const getPokemons = (searchKey) => {
  return httpClient.get(`${API_ENDPOINT}`, {
    params: {
      name: searchKey,
    }
  }).catch(() => []);
}