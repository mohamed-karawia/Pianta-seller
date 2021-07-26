<template>
  <div class="transactions">
      <h2>Ended Transactions</h2>
    <table>
      <tr>
        <th>Ended transcaction</th>
        <th>Price</th>
      </tr>
      <tr v-for="order in orders" :key="order._id">
        <td>{{ order.product.name }}</td>
        <td>{{ order.product.price * order.amount }} L.E</td>
      </tr>
      <tr>
          <th>Total: </th>
          <th>{{ earnings }} L.E</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {

  props: {
    orders: Array,
    earnings: Number
  },

};
</script>

<style lang="scss" scoped>
.transactions {
  min-width: 30rem;
  border-radius: 1rem;
  -webkit-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  -moz-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  @media only screen and (max-width: 750px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    order: 1;
  }

  h2{
      font-size: 2rem;
      border-bottom: 1px solid gray;
      padding: 1rem 0;

  }

  table{
      width: 100%;
      padding: 1rem 2rem;

        tr{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgb(197, 197, 197);
            padding: 1rem 0;

            th{
                font-size: 1.5rem;
            }

            td{
                font-size: 1.5rem;
            }
        }
  }
}
</style>