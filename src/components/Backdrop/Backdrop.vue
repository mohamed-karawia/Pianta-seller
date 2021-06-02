<template>
  <div>
    <div class="backdrop" @click="hideBackdrop"></div>
    <div class="backdrop__container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    hideBackdrop(){
      this.$emit('hideBackdrop')
    }
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);

  span {
    color: #fff;
    position: absolute;
    left: 90%;
    top: 10%;
    cursor: pointer;
    font-size: 3rem;
  }

  &__container {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 45rem;
    z-index: 200;
  }

  &__nav {
    background-color: #fff;
    height: 5rem;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }

    li {
      font-size: 1.5rem;
      cursor: pointer;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      transition: all 0.3s;

      &:hover {
        border-bottom: none !important;
      }

      &::before {
        content: "";
        position: absolute;
        top: 98%;
        left: 50%;
        transform: translateX(-50%);
        height: 1px;
        width: 0px;
        background-color: black;
        transition: all 0.3s;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }
}
</style>