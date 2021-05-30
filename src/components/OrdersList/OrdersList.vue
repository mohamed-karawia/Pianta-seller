<template>
    <div class="ordersList">
        <orders-nav />
        <ul>
            <li v-for="order in orders" :key="order.species">
                <Order :order="order"/>
            </li>
        </ul>
    </div>
</template>

<script>
import Order from '../Order/Order';
import ordersNav from '../../components/OrdersNav/OrdersNav'

export default {
    data(){
        return{
            orders: [
                {species: 'Apples', quantity: 5, price: 15, address: '20, Saad Zaghlout st, Portsaid', mobile: '01235465987', Date: 'Mon May 31 2021'},
                {species: 'Apples', quantity: 5, price: 15, address: '20, Saad Zaghlout st, Portsaid', mobile: '01235465987', Date: 'Mon May 31 2021'},
                {species: 'Apples', quantity: 5, price: 15, address: '20, Saad Zaghlout st, Portsaid', mobile: '01235465987', Date: 'Mon May 31 2021'},
                {species: 'Apples', quantity: 5, price: 15, address: '20, Saad Zaghlout st, Portsaid', mobile: '01235465987', Date: 'Mon May 31 2021'},
                {species: 'Apples', quantity: 5, price: 15, address: '20, Saad Zaghlout st, Portsaid', mobile: '01235465987', Date: 'Mon May 31 2021'},
                {species: 'Apples', quantity: 5, price: 15, address: '20, Saad Zaghlout st, Portsaid', mobile: '01235465987', Date: 'Mon May 31 2021'},
                {species: 'Apples', quantity: 5, price: 15, address: '20, Saad Zaghlout st, Portsaid', mobile: '01235465987', Date: 'Mon May 31 2021'},
                {species: 'Apples', quantity: 5, price: 15, address: '20, Saad Zaghlout st, Portsaid', mobile: '01235465987', Date: 'Mon May 31 2021'},
                {species: 'Apples', quantity: 5, price: 15, address: '20, Saad Zaghlout st, Portsaid', mobile: '01235465987', Date: 'Mon May 31 2021'},
            ]
        }
    },
    components:{
        Order,
        ordersNav
    }
}
</script>

<style lang="scss" scoped>
.ordersList{
    width: fit-content;

    ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;

    @media only screen and (max-width: 500px){
        justify-content: center;
    }
}
}
</style>