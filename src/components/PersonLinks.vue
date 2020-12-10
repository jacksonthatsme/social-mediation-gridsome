<template>
  <div class="person__links">
    <div v-for="link in person.links" :key="link.platform" class="person__links__icon">
      <a :href="link.url">
        <svg>
          <use v-bind="{'xlink:href':'#icon--'+link.platform}"></use>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['person']
}
</script>

<style lang="scss">
.person{
  &__links {
    display: flex;
    @include fluid-property(padding-top, 5px, 10px);

    &__icon {
      @include fluid-property((height, width), 32px, 32px);
      @include fluid-property(margin-right, 5px, 10px);
    }
  }
}
</style>