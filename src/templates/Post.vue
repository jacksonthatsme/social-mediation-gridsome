<template>
  <Layout>
    <PageTitle>
      News
    </PageTitle>
    <PostBody :post="$page.thisPost"></PostBody>

    <PostFeed :posts="$page.otherPosts.edges"></PostFeed>
  </Layout>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PostBody from '~/components/PostBody.vue'
import PostFeed from '~/components/PostFeed.vue'

export default {
  components: {
    PageTitle,
    PostBody,
    PostFeed,
  },
  metaInfo() {
    return {
      title: this.title
    }
  }
}
</script>

<page-query>
query ($id: ID!) {
  thisPost: sanityPost(id: $id) {
    title
    publishDate(format: "MMM DD, Y")
    _rawDescription
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
  }
  otherPosts: allSanityPost(filter: {id: {ne: $id}}) {
    edges {
      node {
        title
        publishDate(format: "MMM DD, Y")
        slug {
          current
        }
      }
    }
  }
}
</page-query>