<template>
  <section class='host-block person-block person-block--large'>
    <div class="person-block__image" :style="bgImage"></div>
    <div class="person-block__info">
      <div class="person-block__label">
        Your host
      </div>
      <div class="person-block__name">{{ person.name }}</div>
      <div class="person-block__bio">{{ person.bio }}</div>
      <PersonLinks :person="person"></PersonLinks>
    </div>
  </section>
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

  &__social__wrapper {
    display: flex;
    @include fluid-property(padding-top, 5px, 10px);
  }

  &__social__icon {
    @include fluid-property((height, width), 32px, 32px);
    @include fluid-property(margin-right, 5px, 10px);
  }
}

.person-block--large {
  @include fluid-property(padding-top, 30px, 50px);
  display: grid;
  grid-template-columns: 1fr;
  @include fluid-property(grid-gap, 10px, 50px);

  .person-block__name {
    padding-top: 0px;
  }

  @media screen and (min-width: $BP--S) {
    grid-template-columns: repeat(2, 1fr);
    .person-block__image {
      grid-column: 2 / 3;
      grid-row: 1;
    }

    .person-block__info {
      grid-column: 1 / 2;
      grid-row: 1;
    }
  }

  @media screen and (min-width: $BP--L) {
    grid-template-columns: repeat(3, 1fr);

    .person-block__image {
      grid-column: 3 / 4;
      grid-row: 1;
    }

    .person-block__info {
      grid-column: 1 / 3;
      grid-row: 1;
    }
  }
}
</style>