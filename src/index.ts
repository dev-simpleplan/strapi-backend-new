export default {
  register() {},

  async bootstrap({ strapi }) {
    const createAdmin = require('../scripts/create-admin');
    await createAdmin(strapi);
  },
};