<template>
  <div class="container">
    <Backdrop v-if="showBackdrop"> <add-product /> </Backdrop>>
  </div>
</template>

<script>
import Backdrop from "../components/Backdrop/Backdrop";
import AddProduct from "../components/AddProduct/AddProduct.vue";

export default {
  data() {
    return {
      showBackdrop: true,
    };
  },
  components: {
    Backdrop,
    AddProduct,
  },
};
</script>