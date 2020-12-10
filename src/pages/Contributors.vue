<template>
  <Layout>
    <PageTitle>
      Contributors
    </PageTitle>
    <PersonBlockHorizontal :person="$page.host.edges[0].node"></PersonBlockHorizontal>
    <div class='section__label'>
      Panelists
    </div>

  </Layout>
</template>

<script>
  import PageTitle from '~/components/PageTitle.vue'
  import PersonBlockHorizontal from '~/components/PersonBlockHorizontal.vue'

  export default {
    components: {
      PageTitle,
      PersonBlockHorizontal
    },
    metaInfo: {
      title: 'Contributors'
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
</style>

<page-query>
  query {
    host: allSanityPerson(filter: {isHost: {eq: true}}) {
      edges {
        node {
          name
          bio
          links {
            platform
            url
          }
          image {
            asset {
              url
            }
          }
        }
      }
    }
    panelists: allSanityPerson(filter: {isHost: {eq: false}}) {
      edges {
        node {
          name
          bio
          links {
            platform
            url
          }
          image {
            asset {
              url
            }
          }
        }
      }
    }
  }
</page-query>