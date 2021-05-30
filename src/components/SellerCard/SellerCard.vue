<template>
    <div class="card">
        <img src="../../assets/user.svg" alt="User">
        <h2>Seller Name</h2>
        <h2>sellerEmail@gmail.com</h2>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.card{
  width: 40%;   
  min-width: 40rem;
  border-radius: 1rem;
  -webkit-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  -moz-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
  box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.342);
  margin-bottom: 2rem;
  display: flex;
  padding: 1rem 3rem;
  align-items: center;
  align-self: center;

  @media only screen and (max-width: 500px){
      width: 100%;
      flex-direction: column;
  }

  & > *{
      margin-right: 2rem;

    @media only screen and (max-width: 500px){
      margin-bottom: 1rem;
    }
  }

  img{
      width: 7rem;
  }

  h2{
      font-size: 1.8rem;
      font-weight: 500;
  }
}
</style>