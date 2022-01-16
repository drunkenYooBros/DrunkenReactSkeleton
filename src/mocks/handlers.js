import { rest } from 'msw'

const getMenuList = rest.get('/menu', (req, res, ctx) => {
  // const id = req.url.searchParams.get('id');
  return res(ctx.json({ result: [
      {
        "id": 1,
        "name": "Play",
        "path": "/play",
        "element": "Play"
      },
      {
        "id": 2,
        "name": "Grid",
        "path": "/grid",
        "element": "Grid"
      },
      {
        "id": 3,
        "name": "User List",
        "path": "/users",
        "element": "Users",
        "nested": true
      }
    ]}
  ))
})

const getList = rest.get('/menu', (req, res, ctx) => {
  // const id = req.url.searchParams.get('id');
  const result = Array(10).fill().map((d, i) => ({id: i}))
  return res(ctx.json({ result }));
});

const getUsers = rest.get('/users', (req, res, ctx) => {
  return res(
    ctx.json({result: [
      {id: '1', fistName: 'Arnold', lastName: 'Yoo', email: 'airnold0986@gmail.com'},
      {id: '2', fistName: 'Hong', lastName: 'Yoo', email: 'devhongs@gmail.com'},
      {id: '3', fistName: 'HM', lastName: 'Son', email: 'sonhm@tot.com'}
    ]})
  )
})

const getConfig = rest.get('/config', (req, res, ctx) => {
  const result = {
    SERVER_TYPE: 'node',
    OS_TYPE: 'window',
  }
  return res(ctx.json({ result }));
})

export const handlers = [
  // Handles a GET /menu request
  getMenuList,
  getUsers,
  getList,
  getConfig,
]