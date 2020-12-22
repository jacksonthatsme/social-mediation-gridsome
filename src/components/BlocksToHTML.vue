<template>
  <BlockSerializer :blocks="blocks" :serializers="serializers"></BlockSerializer>
</template>

<script>
import BlockSerializer from "sanity-blocks-vue-component";
export default {
  components: {
    BlockSerializer
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
  },
}
</script>