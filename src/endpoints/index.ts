import { endpoint } from "../types/endpoint.js";
const endpoints:endpoint[] = [];
import abc from './abc.js';
endpoints.push(abc);
import login from './login.js';
endpoints.push(login);
import register from './register.js';
endpoints.push(register);

export default endpoints