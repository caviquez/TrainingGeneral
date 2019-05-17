import axios from 'axios';
import local from '../config/env/local'

export default class AgentService {
  static getAgents()  {
    return axios.get(local.server.api.baseURL);
  }
}


