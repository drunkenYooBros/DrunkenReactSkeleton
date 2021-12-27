const superagent = require('superagent');

const get = (url: string) => {
  superagent
    .get(url)
    .then((res: any) => {
      console.log({res})
    });
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