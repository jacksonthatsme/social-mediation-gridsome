<template>
  <section class="post">
    <div class="post__date">
      {{ post.publishDate }}
    </div>
    <div class="post__title">
      {{ post.title }}
    </div>
    <g-image v-if="post.image" :src="post.image.asset.url"></g-image>
    <div class="post__body">
      <div class="post__content">
        <FormattedText :content="post._rawDescription"></FormattedText>
      </div>
      <div class="post__author">
        <PersonChip v-for="person in post.authors" :key="person.id" :person="person"></PersonChip>
      </div>
    </div>
  </section>
</template>

<script>
import PersonChip from '~/components/PersonChip.vue'
import FormattedText from '~/components/FormattedText.vue'

export default {
  components: {
    PersonChip,
    FormattedText,
  },
  props: ['post']
}
</script>

<style lang="scss">
.post {
  @include fluid-property(padding-top, 40px, 60px);

  &__date {
    @include type-size--L;
  }
  &__title {
    @include type-size--L;
    font-weight: 700;
    @include fluid-property(padding-bottom, 20px, 30px);
  }
  &__body {
    @include five-up-grid;
    @include fluid-property(padding-top, 20px, 30px);
  }
  &__content {
    @include type-size--R;

    @media screen and (min-width: $BP--S) {
      grid-column: 1 / 4;
    }

    @media screen and (min-width: $BP--L) {
      grid-column: 1 / 5;
    }
  }
}
</style>