<template>
  <PortableText :blocks="blocks" :serializers="serializers" class="formatted-text"/>
</template>

<script>
import PortableText from "sanity-blocks-vue-component";
export default {
  components: {
    PortableText
  },
  props: {
    blocks: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      serializers: {
        types: {
          link: function(children, mark) {
            return '<a href={mark.href}>{children}</a>'
          }
        }
      }
    };
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