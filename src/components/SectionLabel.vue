<template functional>
  <div class="section__label">
    <slot/>
  </div>
</template>

<style lang="scss">
.section__label {
  @include fluid-property(padding-top, 40px, 60px);
  @include type-size--L;
}
</style>