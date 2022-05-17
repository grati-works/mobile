import axios from "axios";
import { SERVER_URL } from "react-native-dotenv";

const api = axios.create({
  baseURL: SERVER_URL || 'http://10.107.144.4:3333',
});

export { api };
