const axios = require('axios')
const fs = require('fs')
const siteId = '5c0dde440e5255498a363560'

module.exports = function (api) {
  api.createSchema(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type SanityDocument implements Node @infer {
        id: ID!
      }
    `)
  })
}