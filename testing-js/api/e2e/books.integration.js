const request = require('supertest');

const mockGetAll = jest.fn();

const creatApp = require('../src/app');

const { generateManyBook } = require('../src/fakes/book.fake');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = creatApp();
    server = app.listen(3001);
  });
  afterAll(async () => {
    await server.close();
  });
  describe('test for [GET] /api/v1/books', () => {
    // eslint-disable-next-line arrow-body-style
    test('Should return "Hello World', () => {
      // Arrage
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
