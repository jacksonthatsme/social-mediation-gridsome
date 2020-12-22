<template>
  <div class="formatted-text">
    <div v-if="this.truncate" :inner-html.prop="rawHTML.outerHTML | truncate(this.length, this.clamp)" ref="truncatedText"></div>
    <g-link v-if="this.link" :to="this.link">
      {{this.cta}}
    </g-link>
    <div v-else>
      <BlocksToHTML :blocks="this.content"></BlocksToHTML>
    </div>
  </div>
</template>

<script>
import BlocksToHTML from '~/components/BlocksToHTML.vue'

export default {

  components: {
    BlocksToHTML
  },

  filters: {
    truncate: function(text, length, clamp) {
      return text.length > length ? text.split(" ").splice(0, length).join(" ") + clamp : text;
    }
  },

  computed: {
    rawHTML: function() {
      let BlockSerializerClass = Vue.extend(BlocksToHTML)
      let BlockSerializerInstance = new BlockSerializerClass({
        propsData: {
          blocks: this.content
        }
      })
      BlockSerializerInstance.$mount()
      return BlockSerializerInstance.$el
    },
  },

  mounted: function () {
    if (this.link) {
      let readMoreLink = `<a href="${this.link}"`
    }
  },

  props: {
    content: {
      type: [Object, Array]
    },
    truncate: {
      type: Boolean,
      default: false
    },
    length: {
      type: Number,
      default: 50
    },
    clamp: {
      type: String,
      default: "..."
    },
    cta: {
      type: String,
      default: "Read More"
    },
    link: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.formatted-text {

  strong {
    font-weight: 700;
  }

  a {
    background-image: url('~@/assets/images/underline.svg');
    background-repeat: no-repeat;
    background-size: 100% 60%;
    background-position: bottom;
    @include fluid-property(padding-bottom, 10px, 20px);
  }
}
</style>