"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.gmail.com'),
                port: env.int('SMTP_PORT', 587),
                secure: env.bool('SMTP_SECURE', false),
                auth: {
                    user: env('SMTP_USERNAME'),
                    pass: env('SMTP_PASSWORD'),
                },
            },
            settings: {
                defaultFrom: env('SMTP_FROM', 'simple.website.testing@gmail.com'),
                defaultReplyTo: env('SMTP_REPLY_TO', 'simple.website.testing@gmail.com'),
            },
        },
    },
});
exports.default = config;
