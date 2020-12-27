<template>
  <Layout>
    <PageTitle>
      <FormattedText :content="$page.thisPage.edges[0].node._rawBody"></FormattedText>
    </PageTitle>
    <SectionLabel>
      Email Us
    </SectionLabel>
    <div class='type-size--L font-weight--bold break-word'>
      hello@socialmediation.show
    </div>

    <SectionLabel>
      Follow Us
    </SectionLabel>
    <BttnWrapper>
      <Bttn url="https://twitter.com/SocialMediateMe" alignment="center">
        Twitter
      </Bttn>
      <Bttn url="https://www.instagram.com/social.mediation/" alignment="center">
        Instagram
      </Bttn>
    </BttnWrapper>
  </Layout>
</template>

<script>
  import PageTitle from '~/components/PageTitle.vue'
  import FormattedText from '~/components/FormattedText.vue'
  import Bttn from '~/components/Bttn.vue'
  import BttnWrapper from '~/components/BttnWrapper.vue'
  import SectionLabel from '~/components/SectionLabel.vue'

  export default {
    components: {
      PageTitle,
      FormattedText,
      Bttn,
      BttnWrapper,
      SectionLabel
      
    },
    metaInfo: {
      title: 'Contact'
    }
  }
</script>

<page-query>
query {
  thisPage: allSanityPage(filter: {slug: {current: {eq: "contact"}}}) {
  	edges {
      node {
        title
        _rawBody
      }
    }
  }
}
</page-query>