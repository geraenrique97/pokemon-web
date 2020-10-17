import httpClient from 'axios';
import getConfig from 'next/config';

const {publicRuntimeConfig: {API_URL}} = getConfig();
const API_ENDPOINT = `${API_URL}/pokemon`;

export const getPokemons = (searchKey) => {
  return httpClient.get(`${API_ENDPOINT}`, {
    params: {
      name: searchKey,
    }
  });
}