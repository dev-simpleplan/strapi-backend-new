// src/index.ts
import createAdmin from './utils/create-admin';

export default {
  register() {},

  async bootstrap({ strapi }) {
    await createAdmin(strapi);
  },
};