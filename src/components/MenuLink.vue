<template>
  <li class='menu__nav__item' ref='siteMenuElement'>
    <g-link v-bind:to="link">
      <slot/>
      <div class="circled-line" ref="circledLine">
        <svg preserveAspectRatio='none' viewBox="0 0 108 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path ref="circledLinePath" d="M95.9992606,1.09560272 C63.8095736,1.90854219 33.3088093,2.13440628 6.58394489,15.8045436 C4.03500226,17.108363 2.61031655,19.2743993 1.79755667,21.3186617 C-3.61915167,34.9428251 19.7952157,35.4166742 34.5830147,35.9566715 C42.0608498,36.2297353 109.383207,35.5893613 106.934845,22.643222 C103.936051,6.786587 62.3073492,2.54772535 45.5706503,1" stroke-width="2px" fill-rule="evenodd" fill="none" stroke-linecap="round"></path>
        </svg>
      </div>
    </g-link>
  </li>
</template>

<script>
export default {
  props: ['link'],

  mounted: function() {
    let pathLength = this.$refs.circledLinePath.getTotalLength();
    this.$refs.circledLine.style.strokeDasharray = pathLength;
    this.$refs.circledLine.style.strokeDashoffset = pathLength;
  }
}
</script>

<style lang="scss">
.menu__nav__item {
  @include fluid-property(padding-bottom, 20px, 30px, $min-screen: $BP--XS, $max-screen: $BP--M);

  @media screen and (min-width: $BP--M) {
    @include fluid-property(padding-bottom, 5px, 15px, $min-screen: $BP--M);
  }

  & a {
    position: relative;

    & .circled-line {
      position: absolute;
      @include fluid-property(top, -10px, -15px);
      @include fluid-property(bottom, -10px, -15px);
      @include fluid-property(right, -10px, -15px);
      @include fluid-property(left, -10px, -15px);
      stroke: $color--yellow;
      transform: rotate(-5deg);
    }

    &:hover {
      & .circled-line {
        svg {
          stroke-dashoffset: 0;
          transition: .5s;
        }
      }
    }
  }
  &:nth-of-type(1) {
    & .circled-line {
      stroke: $color--yellow;
      transform: rotate(-5deg);
    }
  }
  &:nth-of-type(2) {
    & .circled-line {
      stroke: $color--red;
      transform: rotate(8deg);
    }
  }
  &:nth-of-type(3) {
    & .circled-line {
      stroke: $color--green;
      transform: rotate(-4deg);
    }
  }
  &:nth-of-type(4) {
    & .circled-line {
      stroke: $color--blue;
      transform: rotate(6deg);
    }
  }
  &:nth-of-type(5) {
    & .circled-line {
      stroke: $color--purple;
      transform: rotate(-2deg);
    }
  }

  opacity: 0;
  @media screen and (min-width: $BP--M) {
    opacity: 1 !important;
  }
}

@keyframes circleLink {
  from {
    stroke-dashoffset: 360;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>