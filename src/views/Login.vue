<template>
  <div class="container">
    <div class="content">
      <div class="details">
        <h1>Pianta <span>Seller</span></h1>
        <h2>your health is the most thing we care about.</h2>
        <h3>
          Not a seller ?
          <a href="http://localhost:8080/" target="_blank">click here</a>
        </h3>
      </div>
      <div class="form">
        <Login v-if="form === 'login'" @switchForm="switchForm('signup')" />
        <Signup v-else @switchForm="switchForm('login')" />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../components/User/Login";
import Signup from "../components/User/Register";

export default {
  data() {
    return {
      form: "login",
    };
  },
  methods: {
    switchForm(form) {
      this.form = form;
    },
  },
  components: {
    Login,
    Signup,
  },
};
</script>

<style lang="scss" scoped>
@import "../sass/global.scss";

.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $primary-color;
  background-size: cover;
  background-position: center;
  height: 140%;

  .content {
    border-radius: 2rem;
    animation-name: slide;
    animation-duration: 1s;
    padding: 1rem 4rem;
  }

  .details {
    //background-color: #38dbcbe1;
    background-color: #3cbeb1;
    position: absolute;
    top: 15%;
    max-width: 43%;
    padding: 1rem 3rem;
    -webkit-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
    -moz-box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);
    box-shadow: 1px 5px 10px 0px rgba(50, 50, 50, 0.158);

    @media only screen and (max-width: 500px) {
      max-width: 100%;
      left: 0;
    }
  }

  .form {
    display: flex;
    position: absolute;
    top: 15%;
    width: 40%;
    min-width: 30rem;
    left: 55%;

    @media only screen and (max-width: 500px) {
      top: 40%;
      width: 100%;
      left: 0;
    }
  }

  h1 {
    color: #ffff;
    font-size: 8rem;
    text-transform: uppercase;
    font-weight: 500;
    animation-name: slide;
    animation-duration: 1.5s;

    span{
      font-size: 5rem;
    }
  }

  h2 {
    color: #ffff;
    font-size: 3.2rem;
    text-transform: capitalize;
    font-weight: 400;
    animation-name: slide;
    animation-duration: 1.5s;
  }
  h3 {
    color: white;
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 400;
    animation-name: slide;
    animation-duration: 1.5s;

    a {
      color: white;
      text-decoration: none;
    }
  }
}

@keyframes slide {
  0% {
    top: -100%;
  }

  100% {
    top: 30%;
  }
}
</style>