<template>
  <div class="container">
    <seller-card />
    <div class="seller">
      <order-list :orders="orders" :loading="loading" />
      <wallet :pending="pendingWallet" :wallet="wallet" />
    </div>
  </div>
</template>

<script>
import orderList from "../components/OrdersList/OrdersList";
import sellerCard from "../components/SellerCard/SellerCard";
import wallet from '../components/Wallet/Wallet.vue'

export default {
  components: {
    orderList,
    sellerCard,
    wallet
  },
  created() {
    this.$store.dispatch("getOrders", this.$route.query);
  },
  computed: {
    orders() {
      return this.$store.getters.orders;
    },
    loading() {
      return this.$store.getters.ordersLoading;
    },
    wallet(){
       return this.$store.getters.wallet;
    },
    pendingWallet(){
       return this.$store.getters.pendingWallet;
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

.seller{
  display: flex;
  align-items: flex-start;
  width: 100%;

  @media only screen and (max-width: 750px){
    flex-direction: column;
  }
}
</style>