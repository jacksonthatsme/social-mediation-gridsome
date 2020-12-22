<template>
  <g-link :to="post.path">
    <div class="post-item">
      <div class="post-item__content">
        <div class="post-item__date">{{ post.publishDate }}</div>
        <div class="post-item__title">
          {{ post.title }}
        </div>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style lang="scss">
.post-item {
  @include five-up-grid;
  @include fluid-property(padding-top, 30px, 50px);

  &__title {
    @include type-size--L;
    font-weight: 700;
  }
  &__date {
    @include type-size--L;
  }

  &__content {
    @media screen and (min-width: $BP--S) {
      grid-column: 1 / 4;
    }
    @media screen and (min-width: $BP--L) {
      grid-column: 1 / 5;
    }
  }
  &__image {
    background-size: cover;
    background-position: center center;
    width: 100%;
    padding-bottom: 100%;
    height: 0;
  }
}
</style>