import { rest } from 'msw'

const getMenuList = rest.get('/menu', (req, res, ctx) => {
  // const id = req.url.searchParams.get('id');
  return res(ctx.json({ menus: [{
    "id": 1,
    "name": "Play",
    "path": "/play"
  },
  {
    "id": 2,
    "name": "Grid",
    "path": "/grid"
  }] }));
});

export const handlers = [
  // Handles a GET /menu request
  getMenuList,
]