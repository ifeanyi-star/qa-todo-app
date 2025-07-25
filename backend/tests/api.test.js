const request = require('supertest');
const express = require('express');
const app = require('../server'); // or wherever your Express app is exported

describe('API Tests', () => {
  it('POST /login - valid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'ifeanyi', password: '1234' });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Login successful');
  });

  it('POST /login - invalid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'wrong', password: 'wrong' });

    expect(res.statusCode).toBe(401);
    expect(res.body.error).toBe('Invalid credentials');
  });

  it('POST /items - create new item', async () => {
    const res = await request(app)
      .post('/items')
      .send({ text: 'API Test Item' });

    expect(res.statusCode).toBe(201);
    expect(res.body.text).toBe('API Test Item');
  });

  it('GET /items - should return array of todos', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Add PUT and DELETE tests similarly
});
