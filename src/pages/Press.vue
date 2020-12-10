<template>
  <Layout>
    <PageTitle>
      <!-- {{$page.page.title}} -->
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
      title: 'Press'
    }
  }
</script>