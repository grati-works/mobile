import axios from "axios";
import { SERVER_URL } from "react-native-dotenv";

console.log({ SERVER_URL })
const api = axios.create({
  baseURL: SERVER_URL || 'http://10.107.144.14:3333',
});

export { api };
