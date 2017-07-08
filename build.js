const Metalsmith  = require('metalsmith');
const helpers     = require('metalsmith-register-helpers');
const collections = require('metalsmith-collections');
const layouts     = require('metalsmith-layouts');
const markdown    = require('metalsmith-markdown');
const permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({ sitename: 'homeis.blog', siteurl: 'http://homeis.blog/' })
  .source('./src').destination('.').clean(false)

  .use(helpers({ directory: './helpers' }))
  .use(collections({ posts: 'posts/*.md'}))
  .use(markdown())
  .use(permalinks({ relative: false }))
  .use(layouts({ engine: 'handlebars' }))
  .build(err => console.error(err || 'Build complete.'));
