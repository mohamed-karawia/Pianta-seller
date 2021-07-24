<template>
  <div class="fruit">
    <div class="fruit__image">
      <img :src="`${fruit.imageUrl}`" />
    </div>
    <div class="fruit--details">
      <h2>{{ fruit.name }}</h2>
      <h3>{{ fruit.productType }}</h3>
      <h3 v-if="fruit.fresh !== 'none'">{{ fruit.fresh }} Fresh</h3>
      <h4>{{ fruit.price }}$</h4>
      <button @click="deleteProduct(fruit._id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fruit: Object,
  },
  methods: {
    deleteProduct(id) {
      this.$emit("deleteProduct", id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";

.fruit {
  width: 20rem;
  min-width: 20rem;
  border-radius: 1rem;
  -webkit-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  -moz-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 3rem;
  padding: 0.6rem 1rem;
  height: 100%;

  @media only screen and (max-width: 500px) {
    flex-direction: row;
    min-width: 85vw;
    align-items: center;
    height: 14rem;
    padding: 0 2rem;
    margin-right: 0;
  }

  &__image {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &--details {
    margin-left: 1rem;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    width: 90%;

    & > * {
      //margin-bottom: 0.3rem;
    }

    @media only screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 80%;
    }

    h2 {
      align-self: center;
      font-weight: 500;
    }

    h3 {
      color: rgb(95, 95, 95);
    }

    h4 {
      font-weight: 500;
      font-size: 1.5rem;
    }
  }

  button {
    border: none;
    background-color: rgb(243, 43, 43);
    height: 3rem;
    color: white;
    padding: 0 1rem;
    cursor: pointer;
    align-self: center;
    border-radius: 10px;
  }
}
</style>