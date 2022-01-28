import { rest } from 'msw'

const getMenuList = rest.get('/menu', (req, res, ctx) => {
  // const id = req.url.searchParams.get('id');
  let id = 1
  return res(ctx.json({ result: [
      {
        "id": id++,
        "name": "Hong Play",
        "path": "/hongPlay",
        "element": "HongPlay",
        "component": "hongPlay/HongPlay"
      },
      {
        "id": id++,
        "name": "Sung Play",
        "path": "/sungPlay",
        "element": "SungPlay",
        "component": "sungPlay/SungPlay"
      },
      {
        "id": id++,
        "name": "Grid",
        "path": "/grid",
        "element": "Grid",
        "component": "grid/Grid"
      },
      {
        "id": id++,
        "name": "User List",
        "path": "/users",
        "element": "Users",
        "nested": true,
        "component": "users/Users"
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