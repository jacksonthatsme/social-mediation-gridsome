<template>
  <component
    :is="tag"
    :to="link"
    :href="url"
    :bg-color="bgColor"
    :alignment="alignment"
    :class="[setBttnClass, setBgColor, setAlignment, setDisabled]"
  >
    <slot/>
  </component>
</template>

<script>
export default {
  name: "Bttn",
  
  props: {
    tag: {
      type: String,
      default: "a"
    },
    link: {
      type: String
    },
    url: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
    },
    alignment: {
      type: String,
      default: "center"
    }
  },

  computed: {
    setBttnClass: function() {
      return {
        "bttn": true
      };
    },

    setBgColor: function() {
      switch (this.bgColor) {
        case "red":
          return "bttn--red";
          break;
        case "yellow":
          return "bttn--yellow";
          break;
        case "green":
          return "bttn--green";
          break;
        default:
          break;
      }
    },

    setDisabled: function() {
      return {
        "bttn--disabled": this.disabled == true
      }
    },

    setAlignment: function() {
      return {
        "bttn--left-aligned": this.alignment == "left"
      };
    }
  }
}
</script>

<style lang="scss">
.bttn {
  border: 2px solid black;
  @include fluid-property((padding-top, padding-bottom), 15px, 20px);
  @include fluid-property((padding-left, padding-right), 15px, 35px);
  @include fluid-property(border-radius, 12px, 14px);
  position: relative;
  font-weight: 700;
  display: inline-block;
  @include type-size--R;

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

  &--green {
    background-color: #48D8A8;
  }
  &--red {
    background-color: #FF7145;
  }
  &--yellow {
    background-color: #FFCE43;
  }
  &--disabled {
    background-color: #EFF2F4;
    border-color: #C3C8CD;
    color: #C3C8CD;
    cursor: not-allowed;
  }

  &--left-aligned {
    @include type-size--R;
    @include fluid-property(line-height, 16px, 18px);
    @include fluid-property((padding-left, padding-right), 15px, 20px);
    display: flex;
    align-items: center;
  }
  &__icon {
    @include fluid-property(height, 30px, 36px);
    @include fluid-property(width, 30px, 36px);
    @include fluid-property(margin-right, 10px, 15px);
    flex-shrink: 0;
  }
}
</style>