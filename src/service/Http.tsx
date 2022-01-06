import request from "superagent";
import superagent from "superagent";

interface RequestArgs {
  url: string;
  query?: any;
  payload?: any;
}

// const get = (url: string) => {
const get = (args: RequestArgs): Promise<any> => {
  return new Promise((resolve, reject) => {
    superagent
    .get(args.url)
    .query(args.query)
    .end((err: request.ResponseError, res: request.Response) => {
      checkResponse(res)
        ? resolve(res.body)
        : reject(err.response)
    });
  })
}

const post = (args: RequestArgs): Promise<any> => {
  return new Promise((resolve, reject) => {
    superagent
    .post(args.url)
    .send(args.payload)
    .end((err: request.ResponseError, res: request.Response) => {
      checkResponse(res)
        ? resolve(res.body)
        : reject(err.response)
    });
  })
}

const checkResponse = (res: request.Response): Boolean => {
  return res.ok
}

export default {
  get,
  post
};