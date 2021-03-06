module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'apiuser'),
        password: env('DATABASE_PASSWORD', 'apiuser'),
        schema: 'public',
      },
      options: {
        useNullAsDefault: true,
      },

    },
  },
});
