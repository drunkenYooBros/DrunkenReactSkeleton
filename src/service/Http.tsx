const superagent = require('superagent');

const get = (url: string): Promise<Array<any>> => {
  return new Promise((resolve, reject) => {
    superagent
    .get(url)
    .then((res: any) => {
      resolve(res)
    }, (err: any) => {reject(err)})
  })
}

const post = (url: string) => {
  superagent
    .post(url)
    .then((res: any) => {
      console.log({res})
    });
}

export default {
  get,
  post
};