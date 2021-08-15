import * as tokenService from "./tokenService"
const BASE_URL = '/api/products'

export function getAll() { 
  return fetch(BASE_URL)
  .then(res => res.json())
}