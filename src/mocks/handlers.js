import { rest } from 'msw'

const getMenuList = rest.get('/menu', (req, res, ctx) => {
  // const id = req.url.searchParams.get('id');
  return res(ctx.json({ menus: [
      {
        "id": 1,
        "name": "Play",
        "path": "/play"
      },
      {
        "id": 2,
        "name": "Grid",
        "path": "/grid"
      },
      {
        "id": 3,
        "name": "User List",
        "path": "/user"
      }
    ]}
  ));
});

const getUsers = rest.get('/users', (req, res, ctx) => {
  return res(
    ctx.json({users: [
      {id: '1', fistName: 'Arnold', lastName: 'Yoo', email: 'airnold0986@gmail.com'},
      {id: '2', fistName: 'Hong', lastName: 'Yoo', email: 'devhongs@gmail.com'},
      {id: '3', fistName: 'HM', lastName: 'Son', email: 'sonhm@tot.com'}
    ]})
  )
})

export const handlers = [
  // Handles a GET /menu request
  getMenuList,
  getUsers
]