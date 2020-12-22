const axios = require('axios')

module.exports = function (api) {
  api.createSchema(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type SanityDocument implements Node @infer {
        id: ID!
      }
    `)
  })
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allSanityEpisode {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }`)

    data.allSanityEpisode.edges.forEach(({ node }) => {
      createPage({
        path: `/episode/${node.slug.current}`,
        component: './src/templates/Episode.vue',
        context: {
          id: node.id,
          path: `/episodes/${node.slug.current}`
        }
      })
    })
  })
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allSanityPost {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }`)

    data.allSanityPost.edges.forEach(({ node }) => {
      createPage({
        path: `/news/${node.slug.current}`,
        component: './src/templates/Post.vue',
        context: {
          id: node.id
        }
      })
    })
  })
  api.loadSource(({ addSchemaResolvers }) => {
    addSchemaResolvers({
      SanityEpisode: {
        path: {
          type: 'String',
          resolve(obj) {
            return `/episode/${obj.slug.current}`
          }
        }
      },
      SanityPost: {
        path: {
          type: 'String',
          resolve(obj) {
            return `/news/${obj.slug.current}`
          }          
        }
      }
    })
  })
}