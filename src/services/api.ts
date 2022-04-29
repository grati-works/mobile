import axios from "axios";
import { SERVER_URL } from "@env";

console.log(SERVER_URL);
const api = axios.create({
  baseURL: SERVER_URL,
});

export { api };
