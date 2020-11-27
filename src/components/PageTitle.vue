<template>
  <section class='page__title formatted-text'>
    <slot />
  </section>
</template>

<style lang="scss">
.page__title {
  @include type-size--XL;
  font-weight: 700;

  &--long {
    @include type-size--XL;
  }
}
</style>