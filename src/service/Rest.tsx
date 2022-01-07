import superagent from "superagent";

export interface RequestArgs {
  url: string;
  payload?: any;
}

export interface ResponseArgs {
  result: any;
  request?: RequestArgs;
}

const get = (args: RequestArgs): Promise<any> => {
  return new Promise(resolve => {
    superagent
      .get(args.url)
      .query(args.payload)
      .end((err: superagent.ResponseError, res: superagent.Response) => {
        resolve(parseResponse(err, res))
      })
  })
}

const post = async (args: RequestArgs): Promise<any> => {
  return new Promise(resolve => {
    superagent
      .post(args.url)
      .send(args.payload)
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