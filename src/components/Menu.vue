<template>
  <menu class='fixed-menu'>
    <div class='margin-container'>
      <div class='grid-container fixed-menu__grid'>
        <div class='fixed-menu__logo'>
          <g-link to="/">
            <svg viewBox='0 0 300 260'>
              <use xlink:href='#logo'></use>
            </svg>
          </g-link>
        </div>
        <div class='fixed-menu__toggle'
          ref='menu__toggle'
          @click.prevent='toggle'
        >
          <svg class='fixed-menu__background fixed-menu__icon' ref='menuBackground' preserveAspectRatio='none' viewBox='0 0 32 32'>
            <use xlink:href='#blob--01'></use>
          </svg>
          <svg class='fixed-menu__activate fixed-menu__icon' ref='menuIconActivate' viewBox='0 0 32 32'>
            <use xlink:href='#icon--menu'></use>
          </svg>
          <svg class='fixed-menu__close fixed-menu__icon' ref='menuIconClose' viewBox='0 0 32 32'>
            <use xlink:href='#icon--X'></use>
          </svg>
        </div>
        <div class='fixed-menu__nav' data-js='navigation__list'>
          <ul class='fixed-menu__nav__list'>
            <li class='fixed-menu__nav__item mobile__menu__element' ref='siteMenuElement'>
              <g-link to="/">
                Episodes
                <div class="circled-line" data-js="circledLine">
                  <svg preserveAspectRatio='none' viewBox="0 0 108 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M95.9992606,1.09560272 C63.8095736,1.90854219 33.3088093,2.13440628 6.58394489,15.8045436 C4.03500226,17.108363 2.61031655,19.2743993 1.79755667,21.3186617 C-3.61915167,34.9428251 19.7952157,35.4166742 34.5830147,35.9566715 C42.0608498,36.2297353 109.383207,35.5893613 106.934845,22.643222 C103.936051,6.786587 62.3073492,2.54772535 45.5706503,1" stroke-width="2px" fill-rule="evenodd" fill="none" stroke-linecap="round"></path>
                  </svg>
                </div>
              </g-link>
            </li>
            <li class='fixed-menu__nav__item mobile__menu__element' ref='siteMenuElement'>
              <g-link to="/contributors/">
                Contributors
                <div class="circled-line" data-js="circledLine">
                  <svg preserveAspectRatio='none' viewBox="0 0 108 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M95.9992606,1.09560272 C63.8095736,1.90854219 33.3088093,2.13440628 6.58394489,15.8045436 C4.03500226,17.108363 2.61031655,19.2743993 1.79755667,21.3186617 C-3.61915167,34.9428251 19.7952157,35.4166742 34.5830147,35.9566715 C42.0608498,36.2297353 109.383207,35.5893613 106.934845,22.643222 C103.936051,6.786587 62.3073492,2.54772535 45.5706503,1" stroke-width="2px" fill-rule="evenodd" fill="none" stroke-linecap="round"></path>
                  </svg>
                </div>
              </g-link>
            </li>
            <li class='fixed-menu__nav__item mobile__menu__element' ref='siteMenuElement'>
              <g-link to="/press/">
                Press
                <div class="circled-line" data-js="circledLine">
                  <svg preserveAspectRatio='none' viewBox="0 0 108 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M95.9992606,1.09560272 C63.8095736,1.90854219 33.3088093,2.13440628 6.58394489,15.8045436 C4.03500226,17.108363 2.61031655,19.2743993 1.79755667,21.3186617 C-3.61915167,34.9428251 19.7952157,35.4166742 34.5830147,35.9566715 C42.0608498,36.2297353 109.383207,35.5893613 106.934845,22.643222 C103.936051,6.786587 62.3073492,2.54772535 45.5706503,1" stroke-width="2px" fill-rule="evenodd" fill="none" stroke-linecap="round"></path>
                  </svg>
                </div>
              </g-link>
            </li>
            <li class='fixed-menu__nav__item mobile__menu__element' ref='siteMenuElement'>
              <g-link to="/news/">
                News
                <div class="circled-line" data-js="circledLine">
                  <svg preserveAspectRatio='none' viewBox="0 0 108 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M95.9992606,1.09560272 C63.8095736,1.90854219 33.3088093,2.13440628 6.58394489,15.8045436 C4.03500226,17.108363 2.61031655,19.2743993 1.79755667,21.3186617 C-3.61915167,34.9428251 19.7952157,35.4166742 34.5830147,35.9566715 C42.0608498,36.2297353 109.383207,35.5893613 106.934845,22.643222 C103.936051,6.786587 62.3073492,2.54772535 45.5706503,1" stroke-width="2px" fill-rule="evenodd" fill="none" stroke-linecap="round"></path>
                  </svg>
                </div>
              </g-link>
            </li>
            <li class='fixed-menu__nav__item mobile__menu__element' ref='siteMenuElement'>
              <g-link to="/contact/">
                Contact
                <div class="circled-line" data-js="circledLine">
                  <svg preserveAspectRatio='none' viewBox="0 0 108 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M95.9992606,1.09560272 C63.8095736,1.90854219 33.3088093,2.13440628 6.58394489,15.8045436 C4.03500226,17.108363 2.61031655,19.2743993 1.79755667,21.3186617 C-3.61915167,34.9428251 19.7952157,35.4166742 34.5830147,35.9566715 C42.0608498,36.2297353 109.383207,35.5893613 106.934845,22.643222 C103.936051,6.786587 62.3073492,2.54772535 45.5706503,1" stroke-width="2px" fill-rule="evenodd" fill="none" stroke-linecap="round"></path>
                  </svg>
                </div>
              </g-link>
            </li>
          </ul>
        </div>
        <div class='fixed-menu__footer'>
          <div class='footer__social__container mobile__menu__element' data-js='social__button-container site__menu__element'>
            <a class='footer__social__icon' href='https://twitter.com/SocialMediateMe'>
              <svg>
                <use xlink:href='#icon--twitter'></use>
              </svg>
            </a>
            <a class='footer__social__icon' href='https://www.instagram.com/social.mediation/'>
              <svg>
                <use xlink:href='#icon--instagram'></use>
              </svg>
            </a>
          </div>
          <div class='fixed-menu__footer__copyright mobile__menu__element' data-js='footer__copyright site__menu__element'>
            The Fancy Dept. ©2020
          </div>
        </div>
      </div>
    </div>
  </menu>
</template>

<script>
import gsap from 'gsap';
import { ExpoScaleEase } from "gsap/EasePack";
gsap.registerPlugin(ExpoScaleEase);

export default {

  data: function () {
    return {
      isMenuActive: false,
      menuAnimation: gsap.timeline()
    }
  },

  methods: {
    toggle: function () {
      this.$store.commit('toggleMenu')
      if (this.$store.state.isMenuActive) {
        this.menuAnimation.to(this.$refs.menuBackground, {duration: .4, scaleX: 1.2, scaleY: 1.2})
                          .to(this.$refs.menuBackground, {duration: 1.1, ease: ExpoScaleEase.easeOut, scaleX: 60, scaleY: 60})
                          .to(this.$refs.menuIconActivate, { duration: .1, opacity: 0}, "-=1.1")
                          .to(this.$refs.menuIconClose, {duration: .8, opacity: 1}, "-=1")
                          .to(this.$refs.siteMenuElement, {opacity: 1, stagger: .08}, "-=1");
      } else {
        this.menuAnimation.to(this.$refs.menuBackground, {duration: 1.1, scaleX: 1.2, scaleY: 1.2, ease: ExpoScaleEase.easeIn})
                          .to(this.$refs.menuBackground, {duration: .4, scaleX: 1.6, scaleY: 1.6})
                          .to(this.$refs.siteMenuElement, {opacity: 0, stagger: .06}, "-=1.5")
                          .to(this.$refs.menuIconClose, {duration: 0, opacity: 0}, "-=.4")
                          .to(this.$refs.menuIconActivate, {duration: .8, opacity: 1}, "-=.2");
      }
    },
  }
}
</script>

<style lang="scss">
.fixed-menu {
  width: 100vw;
  position: fixed;
  overflow: hidden;
  height: 100vh;
  z-index: 10;
  pointer-events: none;
  top: 0;
  left: 0;

  &__grid {
    grid-template-rows: auto 1fr auto;
  }

  &__logo {
    display: none;
    pointer-events: auto;
    @media screen and (min-width: $BP--M) {
      display: block;
      grid-column: 1 / 7;
      @include fluid-property(padding-top, 40px, 50px, $min-screen: $BP--M);
      transform: translatex(calc-interpolation(-20px, -35px, $min-screen: $BP--M));
    }
    @media screen and (min-width: $max-width) {
      transform: translatex(-35px);
    }
  }

  &__toggle {
    grid-column: 22 / 25;
    position: relative;
    @include fluid-property(margin-top, 30px, 80px);
    pointer-events: auto;
    cursor: pointer;

    @media screen and (min-width: $BP--M) {
      display: none;
    }

    &::before {
      content: '';
      display: block;
      padding-top: 100%;
      height: 0;
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
    position: relative;
    z-index: 11;
    grid-row: 2;
    grid-column: 1 / 25;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: $BP--M) {
      grid-column: 1 / 7;
      justify-content: flex-start;
      @include fluid-property(padding-top, 20px, 30px, $min-screen: $BP--M);
      pointer-events: auto;
    }

    &__list {
      @include type-size--XL;
      font-weight: 700;

      @media screen and (min-width: $BP--M) {
        @include type-size--M;
      }
    }
    &__item {
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

  &__footer {
    position: relative;
    z-index: 11;
    grid-row: 3;
    grid-column: 1 / 25;
    @include fluid-property(padding-bottom, 30px, 50px);
    @include type-size--S;

    @media screen and (min-width: $BP--M) {
      grid-column: 1 / 7;
      pointer-events: auto;
    }
  }
}

.mobile__menu__element {
  opacity: 0;
  @media screen and (min-width: $BP--M) {
    opacity: 1 !important;
  }

  .has-menu & {
    pointer-events: auto;
  }
}
</style>