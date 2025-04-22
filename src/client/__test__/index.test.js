const request = require('supertest');
const app = require('../../server/index');

describe('POST /api/image', () => {
  it('should return a valid image URL for the given city', async () => {
    // Mock a city in the request body
    const response = await request(app)
      .post('/api/image')
      .send({ city: 'london' }) // City to test

    // Check that the response status is 200
    expect(response.status).toBe(200);

    // Check that the response contains an imageUrl field
    expect(response.body).toHaveProperty('imageUrl');

    // Optionally, check that the URL is valid
    const imageUrl = response.body.imageUrl;
    expect(imageUrl).toMatch(/^https?:\/\/.+/); // A simple regex to check if it's a valid URL
  });
});
//