<template>
  <Layout>
    <PageTitle>
      <FormattedText :content="$page.thisPage.edges[0].node._rawBody"></FormattedText>
    </PageTitle>
    <SectionLabel>
      Subscribe
    </SectionLabel>
    <BttnWrapper>
      <Bttn url="https://youtube.com" bg-color="green" alignment="left">
        <svg class='icon bttn__icon'>
          <use xlink:href='#icon--spotify'></use>
        </svg>
        Spotify
        <br>
        Podcasts
      </Bttn>
      <Bttn url="https://youtube.com" bg-color="red" alignment="left">
        <svg class='icon bttn__icon'>
          <use xlink:href='#icon--apple-podcasts'></use>
        </svg>
        Apple
        <br>
        Podcasts
      </Bttn>
      <Bttn url="https://youtube.com" bg-color="yellow" alignment="left">
        <svg class='icon bttn__icon'>
          <use xlink:href='#icon--google-podcasts'></use>
        </svg>
        Google
        <br>
        Podcasts
      </Bttn>
    </BttnWrapper>
    <SectionLabel>
      Latest Episodes
    </SectionLabel>
    <section class='feed' data-section='feed'>
      <EpisodeItem v-for="episode in $page.episodes.edges" :key="episode.node.id" :episode="episode.node"></EpisodeItem>
    </section>
    <Pagination :info="$page.episodes.pageInfo"/>
  </Layout>
</template>

<script>
  import PageTitle from '~/components/PageTitle.vue'
  import Bttn from '~/components/Bttn.vue'
  import EpisodeItem from '~/components/EpisodeItem.vue'
  import FormattedText from '~/components/FormattedText.vue'
  import SectionLabel from '~/components/SectionLabel.vue'
  import BttnWrapper from '~/components/BttnWrapper.vue'
  import Pagination from '~/components/Pagination.vue'


  export default {
    components: {
      PageTitle,
      Bttn,
      EpisodeItem,
      FormattedText,
      SectionLabel,
      BttnWrapper,
      Pagination
    },
    metaInfo: {
      title: 'Social Mediation'
    },
  }
</script>

<style lang="scss">

.bttn__wrapper {
  @include three-up-grid;
  @include fluid-property(grid-gap, 10px, 20px);
  @include fluid-property(padding-top, 10px, 20px);
}
</style>

<page-query>
query ($page: Int) {
  thisPage: allSanityPage(filter: {slug: {current: {eq: "index"}}}) {
  	edges {
      node {
        title
        _rawBody
      }
    }
  }
  episodes: allSanityEpisode(perPage: 4, page: $page) @paginate {
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
        path
        media
        slug {
          current
        }
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