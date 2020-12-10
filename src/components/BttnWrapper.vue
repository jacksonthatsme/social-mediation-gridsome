<template>
  <div class="bttn--wrapper">
    <slot/>
  </div>
</template>

<style lang="scss">
.bttn--wrapper {
  @include three-up-grid;
  @include fluid-property(grid-gap, 10px, 20px);
  @include fluid-property(padding-top, 10px, 20px);
}
</style>