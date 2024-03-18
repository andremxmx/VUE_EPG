
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./planby.cjs.production.min.js')
} else {
  module.exports = require('./planby.cjs.development.js')
}
