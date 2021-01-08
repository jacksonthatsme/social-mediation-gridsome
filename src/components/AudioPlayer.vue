<template>
  <div class="player">
    <div class="player__header">
      <div class="player__header__title">
        Queering Disney
      </div>
      <svg class='icon player__header__close'>
        <use xlink:href='#icon--close'></use>
      </svg>
    </div>
    <div class="player__audio">
      <audio ref="audio" :id="playerId">
        <source :src="url" type="audio/mpeg" />
      </audio>
    </div>
    <div class="player__track">
      <div class="player__elapsed-time">{{ this.elapsedTime }}</div>
      <div class="player__actions">
        <div class="player__jump-back" @click="jumpBack()">
          <svg class='icon player__actions__icon'>
            <use xlink:href='#icon--jump-back'></use>
          </svg>
        </div>
        <div class="player__playback-toggle" @click="toggleAudio()">
          <svg class='icon player__actions__icon'>
            <template v-if="isPlaying">
              <use xlink:href='#icon--pause'></use>
            </template>
            <template v-else-if="!isPlaying">
              <use xlink:href='#icon--play'></use>
            </template>
          </svg>
        </div>
        <div class="player__jump-forward" @click="jumpForward()">
          <svg class='icon player__actions__icon'>
            <use xlink:href='#icon--jump-forward'></use>
          </svg>
        </div>
      </div>
      <div class="player__remaining-time">{{ this.remainingTime }}</div>
      <div class="player__progress"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['url', 'playerId'],
  data() {
    return {
      playbackTime: 0,
      audioDuration: 100,
      audioLoaded: false,
      isPlaying: false,
      elapsedTime: '00:00',
      remainingTime: '00:00',
    };
  },
  methods: {
    convertTime: function(seconds) {
      let format = val => `0${Math.floor(val)}`.slice(-2);
      var hours = seconds / 3600;
      var minutes = (seconds % 3600) / 60;
      return [minutes, seconds % 60].map(format).join(":");
    },
    getElapsedTime: function() {
      const audio = this.$refs.audio;
      if (audio) {
        let seconds = audio.currentTime;
        this.elapsedTime = this.convertTime(seconds)
      }
    },
    getRemainingTime: function() {
      const audio = this.$refs.audio;
      if (audio) {
        let totalDuration = audio.duration
        console.log(totalDuration)
        let elapsedSeconds = audio.currentTime
        let remainingTime = totalDuration - elapsedSeconds
        this.remainingTime = this.convertTime(remainingTime)
      }
    },
    playbackListener: function(e) {
      const audio = this.$refs.audio
      this.playbackTime = audio.currentTime
      this.getElapsedTime()
      this.getRemainingTime()
      audio.addEventListener("ended", this.endListener)
      audio.addEventListener("pause", this.pauseListener)
    },
    pauseListener: function() {
      this.isPlaying = false
      this.listenerActive = false
      this.cleanupListeners()
    },
    endListener: function() {
      this.isPlaying = false
      this.listenerActive = false
      this.cleanupListeners()      
    },
    cleanupListeners: function() {
      const audio = this.$refs.audio
      audio.removeEventListener("timeupdate", this.playbackListener)
      audio.removeEventListener("ended", this.endListener)
      audio.removeEventListener("pause", this.pauseListener)
    },
    toggleAudio: function() {
      const audio = this.$refs.audio
      if (audio.paused) {
        audio.play();
        this.isPlaying = true;
      } else {
        audio.pause();
        this.isPlaying = false;
      }
    },
    jumpBack: function() {
      const audio = this.$refs.audio
      audio.currentTime -= 15
    },
    jumpForward: function() {
      const audio = this.$refs.audio
      audio.currentTime += 30
    },
  },
  mounted: function() {
    this.$nextTick(function() {
      const audio = this.$refs.audio

      let instance = this
      audio.addEventListener("loadedmetadata", function(e){
        instance.getRemainingTime()
      })
      audio.addEventListener("canplay", function(e) {
        this.audioLoaded = true
      }.bind(this))

      this.$watch("isPlaying",function() {
        if(this.isPlaying) {
          const audio = this.$refs.audio
          //prevent starting multiple listeners at the same time
          if(!this.listenerActive) {
            this.listenerActive = true;
            audio.addEventListener("timeupdate", this.playbackListener);
          }
        }
      });
    })
  }
}
</script>

<style lang="scss">
.player {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  background-color: $color--red;
  border-radius: 14px 14px 0 0;
  overflow: hidden;
  color: white;

  &__header {
    background-color: $color--black;
    @include fluid-property((padding-right, padding-left), 15px, 20px);
    @include fluid-property((padding-top, padding-bottom), 5px, 10px);
    display: flex;
    align-items: center;
    justify-content: center;
  
    &__title {
      margin-right: auto;
      @include type-size--R;
      font-weight: 700;
    }
    &__close {
      @include fluid-property((width, height), 15px, 20px);
      fill: white;
      cursor: pointer;
    }
  }

  &__track {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    @include fluid-property((padding-right, padding-left), 15px, 20px);
    @include fluid-property((padding-top, padding-bottom), 10px, 20px);
  }
  &__playback-toggle {
    @include fluid-property((padding-right, padding-left), 15px, 20px);
    cursor: pointer;
  }
  &__jump-forward, &__jump-back {
    cursor: pointer;
  }

  &__elapsed-time, &__remaining-time {
    @include type-size--M;
    position: absolute;
  }
  &__elapsed-time {
    left: 0;
    @include fluid-property(padding-left, 15px, 20px);
  }
  &__remaining-time {
    right: 0;
    @include fluid-property(padding-right, 15px, 20px);
  }
  &__actions{
    display: flex;
    align-items: center;
    &__icon {
      @include fluid-property((width, height), 40px, 45px);
      fill: white;
    }
  }
  &__progress {
    position: absolute;
    height: 100%;
    width: 60%;
    background-color: $color--black;
    opacity: .15;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
  &__audio {
    display: none;
  }
}

</style>