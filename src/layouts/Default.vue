<template>
  <div
    class="site-wrapper"
    v-bind:class="{ 'menu-is-active' : this.$store.state.isMenuActive }"
  >
    <SvgDefs />
    <div class='margin-container'>
      <div class='grid-container'>
        <div class="menu-wrapper">
          <div class='site__logo'>
            <Logo />
          </div>
          <Menu />
        </div>
        <main class="content-wrapper">
          <slot />
        </main>
      </div>
    </div>
    <Footer />
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
import Logo from '~/components/Logo.vue'
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Footer,
    SvgDefs,
    Menu,
    Logo
  }
}
</script>

<style lang="scss">

.page-wrapper {
  align-items: baseline;
}
.menu-wrapper {
  grid-column: 1 / 25;

  @media screen and (min-width: $BP--M) {
    grid-column: 1 / 7;
    position: sticky;
    top: 0;
    position: -webkit-sticky;
    align-self: start;
  }
}

.content-wrapper {
  grid-column: 1 / 25;
  @include fluid-property(padding-bottom, 60px, 80px);

  @media screen and (min-width: $BP--M) {
    grid-column: 8 / 25;
    @include fluid-property(padding-top, 30px, 50px);
  }
}

.site__logo {
  @media screen and (max-width: $BP--M) {
    @include fluid-property((margin-left, margin-right), -35px, -180px);
  }
  
  @media screen and (min-width: $BP--M) {
    @include fluid-property(padding-top, 40px, 50px, $min-screen: $BP--M);
    transform: translatex(calc-interpolation(-20px, -35px, $min-screen: $BP--M));
  }
 
  @media screen and (min-width: $max-width) {
    transform: translatex(-35px);
  }
}

// .menu-is-active {
//   height: 100vh;
//   width: 100vw;
//   overflow: hidden;
// }

</style>