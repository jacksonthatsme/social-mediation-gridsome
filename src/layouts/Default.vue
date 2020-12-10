<template>
  <div class="layout">
    <SvgDefs />
    <Footer />
    <div class="content-container" data-js="content-container">
      <div class='margin-container'>
        <div class='grid-container'>
          <main class="content-wrapper">
            <div class='content__logo'>
              <svg viewBox='0 -10 300 260'>
                <use xlink:href='#logo'></use>
              </svg>
            </div>
            <slot />
          </main>
        </div>
      </div>
    </div>
    <Menu />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from '~/components/Footer.vue'
import SvgDefs from '~/components/SvgDefs.vue'
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Footer,
    SvgDefs,
    Menu
  }
}
</script>

<style lang="scss">
.content-container {
  background-color: white;
  @include fluid-property(margin-bottom, 452px, 274px);
  position: relative;
  z-index: 9;
  width: 100vw;
  overflow-x: hidden;
}

.content-wrapper {
  grid-column: 1 / 25;
  @include fluid-property(padding-bottom, 60px, 80px);

  @media screen and (min-width: $BP--M) {
    grid-column: 8 / 25;
    @include fluid-property(padding-top, 30px, 50px);
  }
}

.content__logo {
  @include fluid-property((margin-left, margin-right), -35px, -180px);
  @media screen and (min-width: $BP--M) {
    display: none;
  }
}

.blob--orange {
  fill: #FF7145;
  visibility: hidden;

  @media screen and (min-width: $BP--M) {
    visibility: visible;
  }
}

.blob--blue {
  fill: $color--blue;
}

.blob--yellow {
  fill: $color--yellow;
}

.blob--green {
  fill: $color--green;
}

.check {
  fill: #000000;
}

.cross {
  fill: #000000;
  visibility: hidden;

  @media screen and (min-width: $BP--M) {
    visibility: visible;
  }
}

.blue__brow--L {
  fill: #000000;
}

.blue__eye--L {
  fill: #000000;
}

.blue__eye--R {
  fill: #000000;
}

.blue__brow--R {
  fill: #000000;
}

.blue__mouth {
  fill: #000000;
}

.blue__hand {
  fill: #000000;
}

.yellow__brow--L {
  fill: #000000;
}

.yellow__brow--R {
  fill: #000000;
}

.yellow__mouth {
  fill: #000000;
}

.yellow__eye--L {
  fill: #000000;
}

.yellow__eye--R {
  fill: #000000;
}

.yellow__eye--R {
  fill: #000000;
}

.yellow__hand {
  fill: #000000;
}
.logotype {
  fill: #000000;
}

</style>