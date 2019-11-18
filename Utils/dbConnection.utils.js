const knexJS = require('knex');
const bookshelfJs = require('bookshelf');

const knexConfig = require('./knexConfig.utils');

// Establish connection
const knex = knexJS(knexConfig);

const bookshelf = bookshelfJs(knex);

bookshelf.plugin(['bookshelf-virtuals-plugin']);

module.exports = bookshelf;
