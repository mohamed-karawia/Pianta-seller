<template>
  <div class="ordersList">
    <ul v-if="!loading">
      <li v-for="order in orders" :key="order._id">
        <Order :order="order" />
      </li>
    </ul>
    <Spinner v-else />
  </div>
</template>

<script>
import Order from "../Order/Order";
import Spinner from '../../components/Spinner/Spinner.vue'

export default {
  data() {
    return {};
  },
  props: {
    orders: Array,
    loading: Boolean
  },
  components: {
    Order,
    Spinner
  },
};
</script>

<style lang="scss" scoped>
.ordersList {
  width: 100%;

  ul {
      list-style: none;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(10rem, 30rem));
      grid-column-gap: 20px;
      row-gap: 1rem;
      align-items: stretch;

      @media only screen and (max-width: 661px){
        grid-template-columns: repeat(1, 1fr);
      }
  }
}
</style>