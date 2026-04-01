import { factories } from '@strapi/strapi';

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const trimValue = (value: unknown) =>
  typeof value === 'string' ? value.trim() : '';

export default factories.createCoreController(
  'api::contact-submission.contact-submission',
  ({ strapi }) => ({
    async submit(ctx) {
      try {
        const body = ctx.request.body ?? {};

        const name = trimValue(body.name);
        const email = trimValue(body.email);
        const storeName = trimValue(body.storeName);
        const message = trimValue(body.message);

        if (!name || !email || !storeName || !message) {
          return ctx.badRequest('Please complete all required fields.');
        }

        if (!isEmail(email)) {
          return ctx.badRequest('Please enter a valid email address.');
        }

        const createdEntry = await strapi.entityService.create(
          'api::contact-submission.contact-submission',
          {
            data: {
              name,
              email,
              store_name: storeName,
              message,
              submitted_at: new Date().toISOString().split('T')[0],
              source: 'website-contact-form',
              admin_notes: '',
            },
          }
        );

        await strapi.plugin('email').service('email').send({
          to: process.env.CONTACT_ADMIN_EMAIL || 'simple.website.testing@gmail.com',
          replyTo: email,
          subject: `New Contact Form Submission from ${name}`,
          text: `
Name: ${name}
Email: ${email}
Store Name: ${storeName}

Message:
${message}
          `.trim(),
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Store Name:</strong> ${storeName}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br/>')}</p>
          `,
        });

        ctx.send({
          success: true,
          message: 'Contact form submitted successfully.',
          data: createdEntry,
        });
      } catch (error) {
        strapi.log.error('Contact submit error:', error);
        return ctx.internalServerError(
          'Something went wrong while submitting the form.'
        );
      }
    },
  })
);