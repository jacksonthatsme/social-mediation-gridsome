<template>
  <a class="press-mention" :href="mention.url">
    <div class="press-mention__headline">{{ mention.headline }}</div>
    <div class="press-mention__author">{{ mention.author }}</div>
    <div class="press-mention__attribution">
      <img class="press-mention__logo" :src="mention.logo.asset.url" alt="">
    </div>
  </a>
</template>

<script>
export default {
  props: ['mention']
}
</script>

<style lang="scss">
.press-mention {
    border: 2px solid black;
    @include fluid-property(border-radius, 12px, 14px);
    position: relative;
    font-weight: 700;
    display: inline-block;
    @include type-size--R;

  &:before {
    position: absolute;
    top: -2px;
    bottom: -4px;
    right: -2px;
    left: -2px;
    content: "";
    display: block;
    @include fluid-property(border-radius, 12px, 14px);
    border-color: inherit;
    border-style: solid;
    border-bottom-width: 4px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-left-width: 0px;
    opacity: 0;
  }
  &:hover {
    transform: translatey(-2px);
    &:before {
      opacity: 1;
    }
  }
  &:active {
    transform: translatey(0px);
    &:before {
      opacity: 0;
    }
  }

  display: grid;
  grid-template-rows: auto auto 1fr auto;

  &__headline {
    @include fluid-property((padding-left, padding-right, padding-top), 15px, 20px);
    @include type-size--M;
  }
  &__author {
    @include fluid-property((padding-left, padding-right, padding-bottom), 15px, 20px);
    @include type-size--S;
  }

  &__attribution {
    border-top: 2px solid black;
    @include fluid-property((padding-left, padding-right, padding-top, padding-bottom), 15px, 20px);
    grid-row: 4 / 5;
  }
  &__logo {
    @include fluid-property(height, 20px, 20px);
  }

  &:nth-child(3n+3) {
    background-color: #FF7145;
  }
  &:nth-child(3n+2) {
    background-color: #FFCE43;
  }
  &:nth-child(3n+1) {
    background-color: #65A2EA;
  }

  @media screen and (min-width: $BP--L) {
    &:nth-child(9n+9) {
      background-color: #65A2EA;
    }
    &:nth-child(9n+8) {
      background-color: #FF7145;
    }
    &:nth-child(9n+7) {
      background-color: #FFCE43;
    }
    &:nth-child(9n+6) {
      background-color: #FFCE43;
    }
    &:nth-child(9n+5) {
      background-color: #65A2EA;
    }
    &:nth-child(9n+4) {
      background-color: #FF7145;
    }
    &:nth-child(4n+3) {
      background-color: #FF7145;
    }
    &:nth-child(4n+2) {
      background-color: #FFCE43;
    }
    &:nth-child(4n+1) {
      background-color: #65A2EA;
    }
  }
}

</style>