const request = require('supertest');
const app = require('../index');

describe('Teste da rota /generate', () => {

  it('deve retornar um identificador único', async () => {
    const response = await request(app).post('/generate');

    expect(response.status).toBe(200);
    expect(response.text).toBeDefined();
    expect(typeof response.text).toBe('string');
    expect(response.text.length).toBe(36);
  });

});