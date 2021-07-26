<template>
  <div class="splash">
    <div class="content">
      <img :src="Logo" alt="logo" />
      <h1>Pianta Seller</h1>
    </div>
  </div>
</template>

<script>
import Logo from "../../assets/logo.png";

export default {
  data() {
    return {
      Logo,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";

.splash {
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: $primary-color;
  z-index: 9999;
  display: flex;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: scale 0.4s;

    img {
      max-width: 20rem;
    }

    h1 {
      color: white;
      font-size: 5rem;
    }
  }
}

@keyframes scale {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  50% {
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1.1);
  }
}
</style>