<template>
  <div class="container">
    <seller-card />
    <div class="seller">
      <order-list :orders="orders" :loading="loading" />
      <div class="seller__side">
        <wallet :pending="pendingWallet" :wallet="wallet" />
        <Transactions :orders="endedOrders" :earnings="earnings" />
      </div>
    </div>
  </div>
</template>

<script>
import orderList from "../components/OrdersList/OrdersList";
import sellerCard from "../components/SellerCard/SellerCard";
import wallet from "../components/Wallet/Wallet.vue";
import Transactions from "../components/Transactions/Transactions.vue";

export default {
  components: {
    orderList,
    sellerCard,
    wallet,
    Transactions,
  },
  created() {
    this.$store.dispatch("getOrders", this.$route.query);
  },
  computed: {
    orders() {
      let orders = [];
      for (let i of this.$store.getters.orders) {
        if (i.state !== "ended") {
          orders.push(i);
        }
      }
      return orders;
    },
    endedOrders() {
      let orders = [];
      for (let i of this.$store.getters.orders) {
        if (i.state === "ended") {
          orders.push(i);
        }
      }
      return orders;
    },
    earnings() {
      let total = 0;
      for (let i of this.endedOrders) {
        total += i.amount * i.product.price;
      }

      return total;
    },
    loading() {
      return this.$store.getters.ordersLoading;
    },
    wallet() {
      return this.$store.getters.wallet;
    },
    pendingWallet() {
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

.seller {
  display: flex;
  align-items: flex-start;
  width: 100%;

  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }

  &__side {
    @media only screen and (max-width: 750px) {
      width: 100%;
    }
  }
}
</style>