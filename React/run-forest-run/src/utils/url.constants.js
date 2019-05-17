import config from '../config/env'

const BASE_URL = config.server.api.BASE_URL

export const GET_COMPANIES_BY_URL = `${BASE_URL}/agents`

