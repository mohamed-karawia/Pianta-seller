<template>
  <div class="add" @click="openForm">
    <h1 class="plusSign">+</h1>
    <h2>Add Product</h2>
  </div>
</template>

<script>
export default {
  methods: {
    openForm() {
      this.$emit("openForm");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";

.add {
  width: 16%;
  min-width: 20rem;
  border-radius: 1rem;
  -webkit-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  -moz-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  //height: 20rem;
    margin-right: 3rem;

  padding: 0.6rem 0;
  background-color: $primary-color;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 100%;

  @media only screen and (max-width: 500px) {
    flex-direction: row;
    width: 85vw;
    align-items: center;
    height: 14rem;
    padding: 0 2rem;
    margin-right: 0rem;
  }

  .plusSign {
    color: white;
    font-size: 15rem;

    @media only screen and (max-width: 500px) {
      font-size: 5rem;
      margin-right: 1rem;
    }
  }

  h2 {
    font-size: 3rem;
    color: white;

    @media only screen and (max-width: 500px) {
      font-size: 2rem;
    }
  }
}
</style>