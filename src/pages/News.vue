<template>
  <Layout>
    <PageTitle>
      News
    </PageTitle>
    <PostBody :post="latestPost"></PostBody>

    <PostFeed :posts="followingPosts"></PostFeed>
  </Layout>
</template>

<script>
  import PageTitle from '~/components/PageTitle.vue'
  import FormattedText from '~/components/FormattedText.vue'
  import PostBody from '~/components/PostBody.vue'
  import PostFeed from '~/components/PostFeed.vue'

  export default {
    components: {
      PageTitle,
      FormattedText,
      PostBody,
      PostFeed,
    },

    metaInfo: {
      title: 'News'
    },

    computed: {
      latestPost: function () {
       return this.$page.allSanityPost.edges[0].node
      },
      followingPosts: function () {
        let posts = {...this.$page.allSanityPost.edges}
        this.$delete(posts, 0)
        return posts
      }
    },

    created: function() {
      console.log(this)
    }
  }
</script>

<page-query>
query {
  allSanityPost {
    edges {
      node {
        title
        publishDate(format: "MMM DD, Y")
        _rawDescription
        path
        image {
          asset {
            url
          }
        }
        authors {
          name
          image {
            asset {
              url
            }
          }
        }
        slug {
          current
        }
      }
    }
  }
}
</page-query>