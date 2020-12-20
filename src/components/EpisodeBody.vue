<template>
<div class='episode__item__body'>
  <div class="episode__item__media">
    <!-- {{episode.media}} -->
  </div>
  <div class='episode__item__description'>
    <div class='episode__item__subhead'>
      Published
      {{episode.publishDate}}
    </div>
    <div class='episode__item__text formatted-text' ref="episodeItemText">
      <!-- <FormattedText :blocks="episode._rawDescription"></FormattedText> -->
      <!-- <div v-html="episodeDescriptionHTML.outerHTML | truncate(200)"></div> -->
      <div :inner-html.prop="episodeDescriptionHTML.outerHTML | truncate(50, '...')"></div>

    </div>
  </div>
  <div class='episode__item__contributors'>
    <div class='episode__item__subhead'>
      Panelists
    </div>
    <div class='episode__item__people'>
      <PersonChip v-for="person in episode.panelists" :key="person.id" :person="person"></PersonChip>
    </div>
  </div>
</div>
</template>

<script>
import PersonChip from '~/components/PersonChip.vue' 
import FormattedText from '~/components/FormattedText.vue'

export default {
  name: "EpisodeBody",

  components: {
    PersonChip,
    FormattedText
  },

  filters: {
    truncate: function(text, length, clamp) {
      return text.length > length ? text.split(" ").splice(0, length).join(" ") + clamp : text;
    }
  },

  computed: {
    episodeDescriptionHTML: function() {
      let formattedTextClass = Vue.extend(FormattedText)
      let formattedTextInstance = new formattedTextClass({
        propsData: {
          blocks: this.episode._rawDescription
        }
      })
      formattedTextInstance.$mount()
      return formattedTextInstance.$el
    }
  },

  props: ['episode'],
}
</script>

<style lang="scss">
.episode {
  &__item {
    @include fluid-property(padding-top, 20px, 40px);
    @include fluid-property(padding-bottom, 40px, 80px);

    &__title {
      @include type-size--L;
      font-weight: 700;
    }

    &__media {
      grid-column: 1 / -1;
    }

    &__body {
      display: grid;
      grid-template-columns: 1fr;
      @include type-size--R;
      @include fluid-property(grid-column-gap, 20px, 60px);
      @include fluid-property(grid-row-gap, 10px, 20px);
      @include fluid-property(padding-top, 20px, 40px);

      @media screen and (min-width: $BP--S) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    &__text {
      @include fluid-property(padding-top, 10px, 20px);
    }

    &__link {
      font-weight: 700;
      color: $color--red;
      display: inline;
    }

    &__description {
      grid-column: 1 / -1;
      @media screen and (min-width: $BP--S) {
        grid-column: 1 / 3;
      }
    }

    &__subhead {
      @include type-size--R;
      font-weight: 700;
    }

    &__people {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      @include fluid-property(padding-top, 10px, 20px);
      @include fluid-property(row-gap, 10px, 20px);

      @media screen and (min-width: $BP--S) {
        grid-template-columns: repeat(2, 1fr);
        @include fluid-property(column-gap, 20px, 40px);
      }
    }
  }
}
</style>