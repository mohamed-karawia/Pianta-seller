<template>
  <div class="container">
    <seller-card />
    <order-list :orders="orders" @changeType="changeType" :loading="loading" />
  </div>
</template>

<script>
import orderList from "../components/OrdersList/OrdersList";
import sellerCard from "../components/SellerCard/SellerCard";

export default {
  components: {
    orderList,
    sellerCard,
  },
  created() {
    this.$store.dispatch("getOrders", this.$route.query);
  },
  computed: {
    orders() {
      return this.$store.getters.orders;
    },
    loading(){
      return this.$store.getters.ordersLoading
    }
  },
  methods: {
    changeType(type) {
      this.$router.replace({
        path: "/",
        query: {
          type: type,
        },
      });
      this.$store.dispatch("getOrders", this.$route.query);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
}
</style>