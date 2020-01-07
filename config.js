'use strict';

// This allows you to run the data-service module independently with environment variables set.
require('dotenv').config();

module.exports = {
  dataService: {
    model: process.env.DATA_SERVICE_MODEL || 'postgresql',
  },
  postgresql: {
    user: process.env.PG_USER || 'test',
    host: process.env.PG_HOST || 'localhost',
    password: process.env.PG_PASSWORD || 'test',
    database: {
      name: process.env.PG_DATABASE || 'test',
      tableName: process.env.PG_DATABASE_TABLE || 'reports',
    },
    port: process.env.PG_PORT || 5432,
  },
};