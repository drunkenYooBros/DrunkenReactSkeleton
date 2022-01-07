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

const get = (config: RestRequestConfig): Promise<any> => {
  return new Promise(resolve => {
    superagent
      .get(config.url)
      .query(config.payload)
      .end((err: superagent.ResponseError, res: superagent.Response) => {
        resolve(parseResponse(err, res))
      })
  })
}

const post = async (config: RestRequestConfig): Promise<any> => {
  return new Promise(resolve => {
    superagent
      .post(config.url)
      .send(config.payload)
      .end((err: superagent.ResponseError, res: superagent.Response) => {
        resolve(parseResponse(err, res))
      })
  })
}

/**
 * response 에러 체크 및 response.body parsing
 * @param err 
 * @param res 
 * @returns
 */
const parseResponse = (err: superagent.ResponseError, res: superagent.Response) => {
  return checkResponse(res)
    ? res.body?.result || {}
    : err.response
}

/**
 * check http response
 * @param res http response
 * @returns http request 성공여부
 */
const checkResponse = (res: superagent.Response): Boolean => {
  return res.ok
}

export default {
  get,
  post,
};