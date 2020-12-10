<template>
  <div class='person-chip'>
    <div class="person-chip__image" :style="bgImage"></div>
    <div class="person-chip__name">{{ person.name }}</div>
  </div>
</template>

<script>
export default {
  name: "PersonChip",
  props: ['person'],

  computed: {
    personImage: function () {
      console.log(this.person.img)
      return require('@/assets/images/' + this.person.img)
    },
    bgImage: function () {
      return {
        backgroundImage: `url(${this.personImage})` 
      }
    }
  }
}
</script>

<style lang="scss">
.person-chip {
  padding-top: 0;
  &__image {
    @include fluid-property((height, width), 36px, 48px);
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    padding-bottom: 0;
  }
  &__name {
    @include type-size--S;
    @include fluid-property(line-height, 16px, 18px);
    @include fluid-property(padding-top, 5px, 10px);
    font-weight: 700;
  }
}

</style>