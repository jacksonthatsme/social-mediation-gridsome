<template>
  <div class='person-block'>
    <div class="person-block__image" :style="bgImage"></div>
    <div class="person-block__info">
        <div class="person-block__name">{{ person.name }}</div>
        <div class="person-block__bio">{{ person.bio }}</div>
        <PersonLinks :person="person"></PersonLinks>
    </div>
  </div>
</template>

<script>
import PersonLinks from '~/components/PersonLinks.vue'
export default {
  components: {
    PersonLinks
  },
  props: ['person'],
  
  computed: {
    bgImage: function () {
      return {
        backgroundImage: `url(${this.person.image.asset.url})` 
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.person-block {
  @include fluid-property(padding-top, 20px, 40px);

  &__image {
    border-radius: 100%;
    background-size: cover;
    background-position: center center;
    width: 100%;
    padding-bottom: 100%;
    height: 0;
  }

  &__name {
    @include type-size--L;
    @include fluid-property(padding-top, 10px, 20px);
    font-weight: 700;
  }

  &__label {
    @include type-size--L;
  }

  &__bio {
    @include fluid-property(padding-top, 5px, 10px);
    @include type-size--R;
  }
}

</style>