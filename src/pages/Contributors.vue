<template>
  <Layout>
    <PageTitle>
      {{$page.page.title}}
    </PageTitle>
  </Layout>
</template>

<script>
  import PageTitle from '~/components/PageTitle.vue'

  export default {
    components: {
      PageTitle
    },
    metaInfo: {
      title: 'Contributors'
    }
  }
</script>

<page-query>
  query {
    page: pages(path: "contributors.md") {
      body
      title
    }
  }
</page-query>t