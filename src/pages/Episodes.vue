<template>
  <Layout>
    <PageTitle>
      {{this.pageTitle}}
    </PageTitle>
    <EpisodeItem v-for="episode in $page.allSanityEpisode.edges" :key="episode.node.id" :episode="episode.node"></EpisodeItem>
    <Pagination :info="$page.allSanityEpisode.pageInfo"/>
  </Layout>
</template>

<script>
import EpisodeItem from '~/components/EpisodeItem.vue'
import Pagination from '~/components/Pagination.vue'
import PageTitle from '../components/PageTitle.vue'

export default {
  components: {
    EpisodeItem,
    Pagination,
    PageTitle
  },

  computed: {
    pageTitle: function() {
      let info = this.$page.allSanityEpisode.pageInfo
      let offsetInteger = ((info.currentPage - 1) * info.perPage)
      let topInteger = info.totalItems - offsetInteger
      let bottomInteger = (topInteger - (info.perPage - 1))
      if (bottomInteger < 1) {
        bottomInteger = 1
      } 
      return `Episodes ${topInteger} – ${bottomInteger}`
    }
  }
}
</script>

<page-query>
query ($page: Int) {
  allSanityEpisode(perPage: 4, page: $page) @paginate {
    pageInfo {
      perPage
      totalPages
      currentPage
      totalItems
      hasPreviousPage
      hasNextPage
      isFirst
      isLast
    }
    edges {
      node {
        id
      	title
        publishDate(format: "MMM DD, Y")
        _rawDescription
        media
        path
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
  }
}
</page-query>