import axios from 'axios'
import should from 'should';
import 'dotenv/config'
const $axios = axios.create({
  baseURL: process.env.TEST_SERVER_URL
});
describe('ReservationController', () => {
  describe('invokes count', () => {
    it('Should return a object contains keys: count', async () => {
      const { data } = await $axios.get(`/reservations/count`);
      should(data).have.properties('count')
    });
  });
  describe('invokes find', () => {
    it('Should return a Array', async () => {
      const { data } = await $axios.get(`/reservations`);
      should(data).be.type('object')
    });
  });
  describe('invokes findById', () => {
    it('Should return a object contains keys: _id', async () => {
      const { data } = await $axios.get(`/reservations/653030707410fe22bcbb8034`);
      should(data).have.properties('_id')
    });
  });
});
