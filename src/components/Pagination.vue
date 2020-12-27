<template>
  <section class='pagination' data-section='pagination'>
    <template v-if="this.info.hasPreviousPage">
      <g-link :to="backUrl">
        <Bttn tag="div">Back</Bttn>
      </g-link>
    </template>
    <template v-else>
      <Bttn :disabled="true" tag="div">Back</Bttn>
    </template>

    <div class="pagination__trail">
      <template v-for="page in this.pages">
        <g-link :class="['pagination__number',(page.isCurrentPage? 'pagination__number--active':'')]" :to="numberUrl(page.pageNumber)" :key="page.pageNumber">
          {{page.pageNumber}}
        </g-link>
      </template>
    </div>

    <template v-if="this.info.hasNextPage">
      <g-link :to="nextUrl">
        <Bttn tag="div">Next</Bttn>
      </g-link>
    </template>
    <template v-else>
      <Bttn :disabled="true" tag="div">Next</Bttn>
    </template>
  </section>
</template>

<script>
import Bttn from '~/components/Bttn.vue'

export default {
  components: {
    Bttn
  },
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      pages: []
    }
  },

  methods: {
    numberUrl: function(page) {
      if(page == 1) {
        return '/'
      }
      else {
        return `/episodes/${page}`
      }
    }
  },

  mounted: function() {
    let data = this
    for (var i = 0; i < this.info.totalPages; i++) {
      let pageNumber = i + 1
      var isCurrentPage = false

      if (data.info.currentPage == pageNumber) {
        isCurrentPage = true
      }
      data.pages.push({'pageNumber': pageNumber, 'isCurrentPage': isCurrentPage})
    }
  },

  computed: {
    backUrl: function() {
      if(this.info.isFirst || this.info.currentPage == 2) {
        return '/'
      }
      else {
        return `/episodes/${this.info.currentPage - 1}`
      }
    },
    nextUrl: function() {
      if(this.info.hasNextPage) {
        return `/episodes/${this.info.currentPage + 1}`
      }
    },
  },
}
</script>

<style lang="scss">
.pagination {
  @include fluid-property(padding-top, 20px, 40px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @include fluid-property(grid-gap, 10px, 20px);

  @media screen and (min-width: $BP--S) {
    display: flex;
    align-items: center;
  }

  &__trail {
    display: flex;
    @include fluid-property(grid-gap, 10px, 30px);
    @include fluid-property((margin-left, margin-right), 10px, 30px);
    display: none;
    @media screen and (min-width: $BP--S) {
      display: block;
    }
  }

  &__number {
    @include type-size--M;
    @include fluid-property((margin-left, margin-right), 10px, 30px);
    color: #999999;

    &--active {
      color: black;
    }
  }

  &__bttn {
    text-align: center;
  }
}
</style>