import Mustache from 'mustache'
import config from '../components/Config/env'


/**
 * Gets the final url for an api call
 * @param {String} url  [The initial url]
 * @param {JSON} params [Json object with parameter values]
 */
export function getUrl(url, params) {
    return Mustache.render(url, params)
  }