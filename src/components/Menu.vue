<template>
  <menu class='menu'>
    <div class='menu__toggle'
      ref='menu__toggle'
      @click.prevent='toggle'
    >
      <svg class='menu__background menu__icon' ref='menuBackground' preserveAspectRatio='none' viewBox='0 0 32 32'>
        <use xlink:href='#blob--01'></use>
      </svg>
      <svg class='menu__activate menu__icon' ref='menuIconActivate' viewBox='0 0 32 32'>
        <use xlink:href='#icon--menu'></use>
      </svg>
      <svg class='menu__close menu__icon' ref='menuIconClose' viewBox='0 0 32 32'>
        <use xlink:href='#icon--X'></use>
      </svg>
    </div>
    <div class='menu__nav'>
      <ul class='menu__nav__list'>
        <MenuLink v-for="page in this.pages" :key="page.label" :link="page.link" ref="siteMenuElement">{{page.label}}</MenuLink>
      </ul>
    </div>
  </menu>
</template>

<script>
import { gsap, Power2 } from 'gsap';
import MenuLink from '~/components/MenuLink';

export default {
  components: {
    MenuLink
  },

  data: function () {
    return {
      menuAnimation: gsap.timeline(),
      menuElements: [],
      pages: [
        {
          label: 'Episodes',
          link: '/'
        },
        {
          label: 'Contributors',
          link: '/contributors/'
        },
        {
          label: 'Press',
          link: '/press/'
        },
        {
          label: 'News',
          link: '/news/'
        },
        {
          label: 'Contact',
          link: '/contact/'
        },
      ]
    }
  },

  methods: {
    toggle: function (i) {
      this.$store.commit('toggleMenu')
      if (this.$store.state.isMenuActive) {
        this.menuAnimation.to(this.$refs.menuBackground, {duration: .4, scaleX: 1.2, scaleY: 1.2})
                          .to(this.$refs.menuBackground, {duration: 1, ease: Power2.easeOut, scaleX: 60, scaleY: 60})
                          .to(this.$refs.menuIconActivate, { duration: .1, opacity: 0}, "-=1.1")
                          .to(this.$refs.menuIconClose, {duration: .8, opacity: 1}, "-=1")
                          .to(this.menuElements, {opacity: 1, stagger: .08}, "-=1");
      } else {
        this.menuAnimation.to(this.$refs.menuBackground, {duration: .8, scaleX: 1.2, scaleY: 1.2, ease: Power2.easeIn})
                          .to(this.$refs.menuBackground, {duration: .4, scaleX: 1.6, scaleY: 1.6})
                          .to(this.menuElements, {opacity: 0, stagger: {
                            each: .08,
                            from: 'end'
                          }}, "-=1.2")
                          .to(this.$refs.menuIconClose, {duration: 0, opacity: 0}, "-=.4")
                          .to(this.$refs.menuIconActivate, {duration: .8, opacity: 1}, "-=.2");
      }
    },
  },
  mounted: function() {
    let data = this
    this.$refs.siteMenuElement.forEach(function(element) {
      data.menuElements.push(element.$el)
    })
  }
}
</script>

<style lang="scss">
.menu {
  @media screen and (max-width: $BP--M) {
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 15;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    @include fluid-property((padding-left, padding-right, padding-top), $min-margin, $max-margin);
    pointer-events: none;
  }
  .menu-is-active & {
    pointer-events: auto;
  }

  &__toggle {
    position: relative;
    align-self: flex-end;
    @include fluid-property((height, width), 40px, 140px);
    pointer-events: auto;
    cursor: pointer;

    @media screen and (min-width: $BP--M) {
      display: none;
    }
  }

  &__background {
    fill: #FF7145;
    transform: scale(1.6);
    pointer-events: none;
  }

  &__close {
    opacity: 0;
  }

  &__icon {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    @media screen and (min-width: $BP--M) {
      justify-content: flex-start;
      @include fluid-property(padding-top, 20px, 30px, $min-screen: $BP--M);
    }

    &__list {
      @include type-size--XL;
      font-weight: 700;

      @media screen and (min-width: $BP--M) {
        @include type-size--M;
      }
    }
  }
}
</style>