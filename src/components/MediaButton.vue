<template>
  <div v-if="this.media">
    {{this.durationFormatted}}
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