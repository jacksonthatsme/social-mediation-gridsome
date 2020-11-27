const axios = require('axios')
const siteId = '5c0dde440e5255498a363560'

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get(`https://api.siteleaf.com/v2/sites/${siteId}/pages`, {
      auth: {
        username: process.env.API_KEY,
        password: process.env.API_SECRET,
      }
    })
    const collection = actions.addCollection({
      typeName: 'Pages'
    })

    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title,
        body: item.body,
        path: item.path
      })
    }
  })
  api.loadSource(async actions => {
    const { data } = await axios.get(`https://api.siteleaf.com/v2/sites/${siteId}/collections/contributors/documents`, {
      auth: {
        username: process.env.API_KEY,
        password: process.env.API_SECRET,
      }
    })
    const collection = actions.addCollection({
      typeName: 'Contributors'
    })

    for (const item of data) {
      collection.addNode({
        id: item.id,
        name: item.title,
      })
    }
  })
  api.loadSource(async actions => {
    const { data } = await axios.get(`https://api.siteleaf.com/v2/sites/${siteId}/collections/episodes/documents`, {
      auth: {
        username: process.env.API_KEY,
        password: process.env.API_SECRET,
      }
    })
    const collection = actions.addCollection({
      typeName: 'Episodes'
    })

    for (const item of data) {
      collection.addNode({
        id: item.id,
        title: item.title,
        slug: item.path,
        body: item.body,
        contributors: item.metadata.contributors,
        date: item.date
      })
    }
  })
  // api.loadSource(({ addSchemaTypes }) => {
  //   addSchemaTypes(`
  //     type Episodes implements Node {
  //       panelists: Contributors @reference(by: "name")
  //     }
  //   `);
  // });
}