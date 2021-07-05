<template>
  <div class="order">
    <div class="order--detail">
      <h2>species:</h2>
      <h3>{{order.product.name}}</h3>
    </div>
    <div class="order--detail">
      <h2>quantity:</h2>
      <h3>{{order.quantity}}</h3>
    </div>
    <div class="order--detail">
      <h2>price:</h2>
      <h3>{{order.product.price}}$</h3>
    </div>
    <div class="order--detail">
      <h2>address:</h2>
      <h3>{{order.locationName}} {{order.locationAddres}}</h3>
    </div>
    <div class="order--detail">
      <h2>mobile:</h2>
      <h3>{{order.client.mobile}}</h3>
    </div>
    <div class="order--detail">
      <h2>Date:</h2>
      <h3>{{order.Date}}</h3>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        order: Object
    }
};
</script>

<style lang="scss" scoped>
.order {
  //width: 30%;
  border-radius: 1rem;
  -webkit-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  -moz-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.342);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;

    @media only screen and (max-width: 500px){
        //width: 100%;
    }

  &--detail {
    display: flex;
    align-items: center;
    margin-bottom: 0.6rem;

    h2 {
      margin-right: 1rem;
      text-transform: capitalize;
      font-weight: 500;
      font-size: 1.7rem;
    }

    h3 {
      font-weight: 400;
      font-size: 1.5rem;
    }
  }
}
</style>