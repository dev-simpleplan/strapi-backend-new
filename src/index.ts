export default {
  register() {},

  async bootstrap({ strapi }) {
    const createAdmin = require('./utils/create-admin');
    await createAdmin(strapi);
  },
};