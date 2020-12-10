<template>
  <Layout>
    <PageTitle>
      {{ $page.sanityEpisode.title }}
    </PageTitle>
    <EpisodeBody :episode="$page.sanityEpisode"></EpisodeBody>
  </Layout>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import EpisodeBody from '~/components/EpisodeBody.vue'

export default {
  components: {
    PageTitle,
    EpisodeBody
  },
  metaInfo() {
    return {
      title: this.title
    }
  },

  created: function() {
    console.log(this)
  }
}
</script>

<page-query>
query ($id: ID!) {
  sanityEpisode(id: $id) {
    title
    publishDate(format: "MMM DD, Y")
    _rawDescription
    panelists {
      name
      image {
        asset {
          url
        }
      }
    }
  }
}
</page-query>