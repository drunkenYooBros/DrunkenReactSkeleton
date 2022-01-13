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

const get = async (config: RestRequestConfig | any): Promise<any> => {
  config = getConfig(config)
  return superagent
    .get(config.url)
    .query(config.payload)
    .then(successHandler)
    .catch(errorHandler)
}

const post = async (config: RestRequestConfig): Promise<any> => {
  config = getConfig(config)
  return superagent
    .post(config.url)
    .send(config.payload)
    .then(successHandler)
    .catch(errorHandler)
}

/**
 * config 설정을 RestRequestConfig 으로 안하고 url(string) 만 설정한 경우 RestRequestConfig type 으로 변환
 * @param config rest 호출시 넘어온 config 정보
 * @returns RestRequestConfig
 */
const getConfig = (config: RestRequestConfig | String): RestRequestConfig => {
  return typeof config === 'string'
    ? {url: config}
    : config as RestRequestConfig
}

/**
 * http request success handler
 * @param res superagent.Response
 * @returns any
 */
 const successHandler = (res: superagent.Response): any => {
  return res.body?.result || {}
}

/**
 * http request error handler
 * @param err superagent.ResponseError
 * @returns any
 */
const errorHandler = (err: superagent.ResponseError): any => {
  // TODO : error 처리
  return err.response
}

export default {
  get,
  post,
};