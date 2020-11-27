<template>
  <Layout>
    <PageTitle>
      {{$page.page.body}}
    </PageTitle>
    <div class='section__label type-size--M'>
      Subscribe
    </div>
    <section class='bttn__wrapper' data-section='subscribe'>
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
    </section>
    <section class='feed' data-section='feed'>
      <div v-for="edge in $page.episodes.edges" :key="edge.node.id">
        <h2>{{ edge.node.title }}</h2>
      </div>
    </section>
  </Layout>
</template>

<script>
  import PageTitle from '~/components/PageTitle.vue'
  import Bttn from '~/components/Bttn.vue'

  export default {
    components: {
      PageTitle,
      Bttn
    },
    metaInfo: {
      title: 'Social Mediation'
    }
  }
</script>

<style lang="scss">
.section {
  &__label {
    @include fluid-property(padding-top, 40px, 60px);
    @include type-size--L;
  }
}

.bttn__wrapper {
  @include three-up-grid;
  @include fluid-property(grid-gap, 10px, 20px);
  @include fluid-property(padding-top, 10px, 20px);
}
</style>

<page-query>
query {
  page: pages(path: "index.md") {
    body
  }
  episodes: allEpisodes {
    edges {
      node {
        title
      }
    }
  }
}
</page-query>