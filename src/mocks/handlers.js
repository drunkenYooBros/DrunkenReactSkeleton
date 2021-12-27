import { rest } from 'msw'

const getMenuList = rest.get('/menu', (req, res, ctx) => {
  // const id = req.url.searchParams.get('id');
  return res(ctx.json({ list: [] }));
});

export const handlers = [
  // Handles a GET /menu request
  getMenuList,
]