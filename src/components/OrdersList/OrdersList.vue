<template>
  <div class="ordersList">
    <orders-nav />
    <ul>
      <li v-for="order in orders" :key="order._id">
        <Order :order="order" />
      </li>
    </ul>
  </div>
</template>

<script>
import Order from "../Order/Order";
import ordersNav from "../../components/OrdersNav/OrdersNav";

export default {
  data() {
    return {};
  },
  props: {
    orders: Array,
  },
  components: {
    Order,
    ordersNav,
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

      @media only screen and (max-width: 661px){
        grid-template-columns: repeat(1, 1fr);
      }
  }
}
</style>