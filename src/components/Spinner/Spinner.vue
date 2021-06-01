<template>
    <div class="loader" :style="'width: ' + width + ';height: ' + height + ';' + [position === 'absolute' ? 'position: absolute; left: 45%' : 'position: static']+ ';' + [margin === '0' ? 'margin: 0;' : 'margin: 0 auto;']">Loading...</div>
</template>

<script>
export default {
  props:{
    width: String,
    height: String,
    position : String,
    margin: String
  }
}
</script>

<style lang="scss" scoped>
.loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  //margin: 0 auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(56,219,203, 0.2);
  border-right: 1.1em solid rgba(56,219,203, 0.2);
  border-bottom: 1.1em solid rgba(56,219,203, 0.2);
  border-left: 1.1em solid #38dbcb;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>