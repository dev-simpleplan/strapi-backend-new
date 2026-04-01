'use strict';

module.exports = async (strapi) => {
  const adminUser = {
    firstname: 'Anand',
    lastname: 'Pandey',
    email: 'anandpandey.simpleplan@gmail.com',
    password: 'Admin@12345',
    isActive: true,
    roles: [1],
  };

  const existing = await strapi.db.query('admin::user').findOne({
    where: { email: adminUser.email },
  });

  if (!existing) {
    await strapi.admin.services.user.create(adminUser);
    console.log('✅ Admin user created');
  } else {
    console.log('⚠️ Admin already exists');
  }
};