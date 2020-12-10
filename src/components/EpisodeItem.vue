<template>
  <div class='episode__item'>
  <g-link :to="{path: '/episodes/' + episode.slug.current}">
      <div class='episode__item__title'>
      {{episode.title}}
      </div>
  </g-link>
  <EpisodeBody :episode="episode"></EpisodeBody>
  </div>
</template>

<script>
import EpisodeBody from '~/components/EpisodeBody.vue' 

export default {
  name: "EpisodeItem",

  components: {
    EpisodeBody
  },

  props: ['episode']
}
</script>

<style lang="scss">
.episode {
  &__item {
    @include fluid-property(padding-top, 20px, 40px);
    @include fluid-property(padding-bottom, 40px, 80px);

    &__title {
      @include type-size--L;
      font-weight: 700;
    }
  }
}
</style>