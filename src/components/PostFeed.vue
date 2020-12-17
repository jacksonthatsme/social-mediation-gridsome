<template>
  <section class="post-feed">
    <PostItem v-for="post in posts" :key="post.node.id" :post="post.node"></PostItem>
  </section>
</template>

<script>
import PostItem from '~/components/PostItem.vue'
export default {
  components: {
    PostItem,
  },
  props: ['posts'],
}
</script>

<style lang="scss">
.post-feed {
  border-top: 2px solid #C3C8CD;
  @include fluid-property(margin-top, 60px, 80px);
}
</style>