import * as tokenService from "./tokenService"
const BASE_URL = "/api/recent"

export function getRecentActivity() {
  return fetch(
    `${BASE_URL}/`,
    {headers: { Authorization: "Bearer " + tokenService.getToken() }},
    { mode: "cors" }
    ).then((res) => res.json())
}