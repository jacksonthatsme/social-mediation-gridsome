<template>
  <Layout>
    <PageTitle>
      <FormattedText :blocks="$page.thisPage.edges[0].node._rawBody"></FormattedText>
    </PageTitle>
    <SectionLabel>
      Downloads
    </SectionLabel>
    <BttnWrapper>
      <Bttn url="https://youtube.com">
        Download our press kit
      </Bttn>
    </BttnWrapper>
    <SectionLabel>
      What people are saying about us
    </SectionLabel>
    <BttnWrapper>
      <PressMention v-for="mention in $page.pressMentions.edges" :key="mention.node.id" :mention="mention.node"></PressMention>
      <!-- {% for mention in page.Mentions %}
        {% include mention-block.html headline=mention.Headline author=mention.Author logo=mention.Logo url=mention.URL %}
      {% endfor %} -->
    </BttnWrapper>

  </Layout>
</template>

<script>
  import PageTitle from '~/components/PageTitle.vue'
  import FormattedText from '~/components/FormattedText.vue'
  import Bttn from '~/components/Bttn.vue'
  import PressMention from '~/components/PressMention.vue'
  import SectionLabel from '~/components/SectionLabel.vue'
  import BttnWrapper from '~/components/BttnWrapper.vue'

  export default {
    components: {
      PageTitle,
      FormattedText,
      Bttn,
      PressMention,
      SectionLabel,
      BttnWrapper,
    },
    metaInfo: {
      title: 'Press'
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
  thisPage: allSanityPage(filter: {slug: {current: {eq: "press"}}}) {
  	edges {
      node {
        title
        _rawBody
      }
    }
  }
  pressMentions: allSanityPressMention {
    edges {
      node {
        headline
        author
        url
        logo {
          asset {
            url
          }
        }
      }
    }
  }
}
</page-query>