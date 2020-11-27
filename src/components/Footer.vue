<template>
  <footer class="footer" data-js="footer">
    <div class='margin-container'>
      <div class='grid-container'>
        <div class="footer__header">
          Stay in touch!
        </div>
        <div class="footer__newsletter">
          <div class="footer__newsletter__label">
            Sign up for our newsletter to stay up-to-date on the latest in Social Mediation
          </div>
        </div>
        <div class="footer__social">
          <div class="footer__header">
            Follow along!
          </div>
          <div class="footer__social__container">
            <a href="https://twitter.com/SocialMediateMe" class="footer__social__icon">
              <svg>
                <use xlink:href='#icon--twitter'></use>
              </svg>
            </a>
            <a href="https://www.instagram.com/social.mediation/" class="footer__social__icon">
              <svg>
                <use xlink:href='#icon--instagram'></use>
              </svg>
            </a>
          </div>
        </div>
        <div class="footer__copyright">
          The Fancy Dept. ©2020
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  @include fluid-property((padding-bottom, padding-top), 40px, 60px);
  background-color: #FFCE43;
  position: fixed;
  width: 100vw;
  bottom: 0;
  z-index: 8;

  &__header {
    grid-column: 1 / 25;
    @include type-size--L;
    @include fluid-property(padding-bottom, 10px, 20px);

    @media screen and (min-width: $BP--M) {
      grid-column: 1 / 7;
    }
  }

  &__newsletter {
    grid-column: 1 / 25;
    @include type-size--M;

    @media screen and (min-width: $BP--M) {
      grid-column: 8 / 25;
      padding-top: 0px;
    }

    &__form {
      @include fluid-property(padding-top, 10px, 20px);
      display: grid;
      grid-template-columns: 1fr;
    }

    &__input {
      @include fluid-property(padding, 20px, 30px);
      grid-row: 1;
      grid-column: 1 / 3;
      @include type-size--M;
      font-family: $font-stack--sans;
      @include fluid-property(border-radius, 12px, 14px);
      border: none;

      @media screen and (max-width: $BP--M) {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }

      &:focus {
        outline: none;
      }
    }

    &__submit {
      @extend .bttn !optional;
      background-color: black;
      @include type-size--R;
      cursor: pointer;
      color: white;
      -webkit-appearance: none;
      appearance: none;
      -moz-appearance: none;

      @media screen and (max-width: $BP--M) {
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        margin-top: 0px;
      }

      @media screen and (min-width: $BP--M) {
        grid-row: 1;
        grid-column: 2 / 3;
        @include fluid-property((border-radius, -webkit-border-radius), 6px, 8px);
        margin: 10px;
      }
    }
  }

  &__social {
    grid-column: 1 / 25;
    @include fluid-property(padding-top, 40px, 60px);

    @media screen and (min-width: $BP--M) {
      display: none;
    }

    &__icon {
      @include fluid-property((height, width), 50px, 50px);
      @include fluid-property(margin-right, 5px, 10px);
    }

    &__container {
      display: flex;
    }
  }

  &__copyright {
    grid-column: 1 / 25;
    @include type-size--S;

    @media screen and (min-width: $BP--M) {
      display: none;
    }
  }
}
</style>