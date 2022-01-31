import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '001abc',
        name: 'Mr Tester',
        username: 'Testman'
      })
    );
  }),
  rest.get('https://jsonplaceholder.typicode.com/users/2', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '001abc',
        name: 'Mr Tester 2',
        username: 'BobTheTester'
      })
    );
  }),
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: '001', title: 'This is a mock data 001' },
        { id: '002', title: 'This is a mock data 002' },
      ])
    );
  })
];