import axios from 'axios'
import should from 'should';
import 'dotenv/config'
const $axios = axios.create({
  baseURL: process.env.TEST_SERVER_URL
});
describe('TableController', () => {
  describe('invokes count', () => {
    it('Should return a object contains keys: count', async () => {
      const { data } = await $axios.get(`/tables/count`);
      should(data).have.properties('count')
    });
  });
  describe('invokes find', () => {
    it('Should return a Array', async () => {
      const { data } = await $axios.get(`/tables`);
      should(data).be.type('object')
    });
  });
  describe('invokes findById', () => {
    it('Should return a object contains keys: _id', async () => {
      const { data } = await $axios.get(`/tables/652fd99e1cd6122857a42d7b`);
      should(data).have.properties('_id')
    });
  });
});
