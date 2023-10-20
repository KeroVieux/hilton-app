import axios from 'axios'
import should from 'should';
import 'dotenv/config'
const $axios = axios.create({
  baseURL: process.env.TEST_SERVER_URL
});
describe('RestaurantController', () => {
  describe('invokes count', () => {
    it('Should return a object contains keys: count', async () => {
      const { data } = await $axios.get(`/restaurants/count`);
      should(data).have.properties('count')
    });
  });
  describe('invokes find', () => {
    it('Should return a Array', async () => {
      const { data } = await $axios.get(`/restaurants`);
      should(data).be.type('object')
    });
  });
  describe('invokes findById', () => {
    it('Should return a object contains keys: _id', async () => {
      const { data } = await $axios.get(`/restaurants/652fd7fc164584255d3a01a5`);
      should(data).have.properties('_id')
    });
  });
});
