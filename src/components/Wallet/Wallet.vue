<template>
  <div class="wallet">
    <img class="mobileImage" src="../../assets/wallet.svg" alt="wallet" />

    <div class="content">
      <h3>Hello, {{ this.$store.state.sellerName }}</h3>
      <img class="webImage" src="../../assets/wallet.svg" alt="wallet" />
      <h2>Pending money:  {{pending}} L.E</h2>
      <h2>Wallet: {{ wallet }} L.E</h2>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      totalItems: 0,
      totalPrice: 0
    }
  },
  props: {
    pending: Number,
    wallet: Number
  }
}
</script>

<style lang="scss" scoped>
.wallet {
  min-width: 30rem;
  border-radius: 1rem;
  -webkit-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  -moz-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;

  @media only screen and (max-width: 750px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    order: 1;
  }

  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    text-transform: capitalize;

    @media only screen and (max-width: 766px) {
      margin-bottom: 1rem;
    }
  }

  h2 {
    font-weight: 500;
  }

  img {
    width: 20rem;
    margin: 1rem 0;

    @media only screen and (max-width: 766px) {
      width: 10rem;
    }
  }

  .webImage {
    @media only screen and (max-width: 766px) {
      display: none;
    }
  }

  .mobileImage {
    @media only screen and (min-width: 766px) {
      display: none;
    }
  }
}
</style>