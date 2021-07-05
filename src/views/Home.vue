<template>
  <div class="container">
    <seller-card />
    <order-list :orders="orders"/>
  </div>
</template>

<script>
import orderList from '../components/OrdersList/OrdersList';
import sellerCard from '../components/SellerCard/SellerCard';

export default {
  components:{
    orderList,
    sellerCard
  },
  created(){
    this.$store.dispatch('getOrders')
  },
  computed: {
    orders(){
      return this.$store.getters.orders
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (max-width: 500px){
      flex-direction: column;
  }
}
</style>