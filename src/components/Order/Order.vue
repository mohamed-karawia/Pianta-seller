<template>
  <div class="order">
    <img :src="`${order.product.imageUrl}`" />
    <div class="order--detail">
      <h2>species:</h2>
      <h3>{{order.product.name}}</h3>
    </div>
    <div class="order--detail">
      <h2>quantity:</h2>
      <h3>{{order.amount}}</h3>
    </div>
    <div class="order--detail">
      <h2>price:</h2>
      <h3>{{order.product.price}}$</h3>
    </div>
    <div class="order--detail">
      <h2>Total Price:</h2>
      <h3>{{order.product.price * order.amount}}$</h3>
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
      <h2>state:</h2>
      <h3 
      :class="[order.state === 'started' ? 'green' : 'red']"
      style="text-transform: capitalize">{{order.state}}</h3>
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
  border-radius: 1rem;
  -webkit-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  -moz-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.342);
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
  height: 100%;


    @media only screen and (max-width: 500px){
        //width: 100%;
    }

    img {
    width: 14rem;
    align-self: center;

    @media only screen and (max-width: 500px) {
      margin-right: 1rem;
      width: 10rem;
    }
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

.green {
  color: rgb(96, 221, 96);
}

.red{
  color: red;
}
</style>