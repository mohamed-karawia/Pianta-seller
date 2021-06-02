<template>
  <div class="productsList">
    <ul>
      <li>
        <add-product-box @openForm="openForm" />
      </li>
      <li v-for="product in products" :key="product._id">
        <single-fruit :fruit="product" @deleteProduct="deleteProduct" />
      </li>
    </ul>
  </div>
</template>

<script>
import SingleFruit from "../SingleFruit/SingleFruit";
import AddProductBox from "../AddProductBox/AddProductBox.vue";

export default {
  props: {
    products: Array,
  },
  components: {
    SingleFruit,
    AddProductBox,
  },
  methods: {
    deleteProduct(id) {
      this.$emit("deleteProduct", id);
    },
    openForm() {
      this.$emit("openForm");
    },
  },
};
</script>

<style lang="scss" scoped>
.productsList {
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    align-items: stretch;

    @media only screen and (max-width: 500px) {
      justify-content: center;
    }
  }
}
</style>