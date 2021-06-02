<template>
  <div class="container">
    <Backdrop v-if="showBackdrop" @hideBackdrop="hideBackdrop">
      <add-product @hideBackdrop="showBackdrop = false" /> </Backdrop
    >
    <products-list :products="products" @deleteProduct="deleteProduct" @openForm="openForm"/>
  </div>
</template>

<script>
import Backdrop from "../components/Backdrop/Backdrop";
import AddProduct from "../components/AddProduct/AddProduct.vue";
import ProductsList from '../components/ProductsList/ProductsList.vue';

export default {
  data() {
    return {
      showBackdrop: false,
    };
  },
  components: {
    Backdrop,
    AddProduct,
    ProductsList,
  },
  methods:{
    hideBackdrop() {
      this.showBackdrop = false;
    },
    deleteProduct(id){
      this.$store.dispatch('deleteProduct', id)
    },
    openForm(){
      this.showBackdrop = true;
    }
  },
  created(){
    this.$store.dispatch('getMyProducts')
  },
  computed:{
    products(){
      return this.$store.getters.products
    }
  }
,
};
</script>