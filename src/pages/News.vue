<template>
  <Layout>
    <PageTitle>
      News
    </PageTitle>
  </Layout>
</template>

<script>
  import PageTitle from '~/components/PageTitle.vue'
  import FormattedText from '~/components/FormattedText.vue'


  export default {
    components: {
      PageTitle,
      FormattedText,
    },

    metaInfo: {
      title: 'News'
    }
  }
</script>