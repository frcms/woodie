module.exports = {
  type: 'sqlite',
  database: './test.db',
  synchronize: false,
  logging: false,
  entities: ['./**/entities/*.entity*'],
  cli: {
    entitiesDir: './src/entities',
  },
};
