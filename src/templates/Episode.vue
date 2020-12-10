<template>
  <Layout>
    <PageTitle>
      {{ $page.episode.title }}
    </PageTitle>
    <EpisodeBody :episode="$page.episode"></EpisodeBody>
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
      title: this.$page.post.title
    }
  }
}
</script>

<page-query>
query ($id: ID!) {
  episode(id: $id) {
    title
    body
    date(format: "MMM de, Y")
    panelists {
      name
      imgPath
      img
    }
  }
}
</page-query>