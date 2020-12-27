<template>
  <div class="media-button">
    <svg class='icon media-button__icon'>
      <use xlink:href='#icon--play'></use>
    </svg>
    Listen to it
    <div class="media-button__duration">
      {{this.durationFormatted}}
    </div>
  </div>
</template>
<script>
export default {
  props: ['media'],

  data() {
    return {
      trackDuration: ''
    }
  },

  methods: {
    getDuration: function (src, callback) {
      const audio = new Audio();
      audio.addEventListener('loadedmetadata', function(event) {
        callback(audio.duration)
      });
      audio.src = src;
    }
  },
  created() {
    let data = this
    this.getDuration(this.media, function(duration){
      data.trackDuration = duration
    })
  },

  computed: {
    durationFormatted: function() {
      let minutes = parseInt(this.trackDuration / 60, 10);
      let seconds = parseInt(this.trackDuration % 60);
      
      if (seconds < 10) {
        seconds = '0' + String(seconds);
      }

      return `${minutes}:${seconds}`
    }
  },
}
</script>

<style lang="scss">
  .media-button {
    border: 2px solid black;
    @include fluid-property((padding-top, padding-bottom), 15px, 20px);
    @include fluid-property((padding-left, padding-right), 15px, 30px);
    @include fluid-property(border-radius, 12px, 14px);
    position: relative;
    font-weight: 700;
    @include type-size--R;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:before {
      position: absolute;
      top: -2px;
      bottom: -4px;
      right: -2px;
      left: -2px;
      content: "";
      display: block;
      @include fluid-property(border-radius, 12px, 14px);
      border-color: inherit;
      border-style: solid;
      border-bottom-width: 4px;
      border-top-width: 0px;
      border-right-width: 0px;
      border-left-width: 0px;
      opacity: 0;
    }
    &:not(.bttn--disabled):hover {
      transform: translatey(-2px);
      &:before {
        opacity: 1;
      }
    }
    &:not(.bttn--disabled):active {
      transform: translatey(0px);
      &:before {
        opacity: 0;
      }
    }
  &__icon {
    @include fluid-property(height, 30px, 36px);
    @include fluid-property(width, 30px, 36px);
    @include fluid-property(margin-right, 10px, 15px);
    flex-shrink: 0;
    fill: black;
  }

  &__duration {
    margin-left: auto;
    font-weight: 500;
  }
  }
</style>