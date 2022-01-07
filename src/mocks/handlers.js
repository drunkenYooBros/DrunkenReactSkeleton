import { rest } from 'msw'

const getMenuList = rest.get('/menu', (req, res, ctx) => {
  // const id = req.url.searchParams.get('id');
  const result = {
    menus: [
      {
        "id": 1,
        "name": "Play",
        "path": "/play"
      },
      {
        "id": 2,
        "name": "Grid",
        "path": "/grid"
      }
    ]
  }
  return res(ctx.json({ result }));
});

const getList = rest.get('/menu', (req, res, ctx) => {
  // const id = req.url.searchParams.get('id');
  const result = Array(10).fill().map((d, i) => ({id: i}))
  return res(ctx.json({ result }));
});

export const handlers = [
  // Handles a GET /menu request
  getMenuList,
  getList,
]