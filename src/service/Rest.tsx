import superagent from "superagent";

export interface RestRequestConfig {
  url: string;
  payload?: any;
  errorHandler?: Function;
}

export interface RestResponse {
  result: any;
  request?: RestResponse;
}

const get = async (config: RestRequestConfig): Promise<any> => {
  return superagent
    .get(config.url)
    .query(config.payload)
    .then(successHandler)
    .catch(errorHandler)
}

const post = async (config: RestRequestConfig): Promise<any> => {
  superagent
    .post(config.url)
    .send(config.payload)
    .then(successHandler)
    .catch(errorHandler)
}

/**
 * http request success handler
 * @param res 
 * @returns
 */
 const successHandler = (res: superagent.Response) => {
  return res.body?.result || {}
}

/**
 * http request error handler
 * @param err 
 * @returns
 */
const errorHandler = (err: superagent.ResponseError) => {
  // TODO : error 처리
  return err.response
}

export default {
  get,
  post,
};