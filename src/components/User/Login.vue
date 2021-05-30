<template>
  <div class="login">
    <h1>Login</h1>

    <div class="input--box">
      <label>EMAIL</label>
      <input type="email" v-model="email" placeholder="example@example.com" />
    </div>

    <div class="input--box">
      <label>PASSWORD</label>
      <input type="password" v-model="password" />
    </div>

    <div class="login--buttons">
      <button class="loginButton" @click="$router.push('/')">LOGIN</button>
      <p>Don't have account ? <span @click="$emit('switchForm')">Signup</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    loginLocal() {},
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";

.login {
  background-color: #ffff;
  /*position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);*/
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  padding: 2rem;
  @media only screen and (max-width: 500px) {
    width: 100%;
    align-items: center;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 100;
    letter-spacing: 2px;
  }

  .input--box {
    @include loginInput;

    label {
      font-size: 1.5rem;
      letter-spacing: 2px;
      margin-bottom: 2px;
    }

    input {
      border: 1px solid black;
      height: 4rem;
      padding-left: 0.6rem;
    }
  }

  .loginButton {
    @include loginButton;

    @media only screen and (max-width: 500px) {
      margin-left: 1.2rem;
    }
  }

  p {
    font-size: 1.6rem;
    span {
      color: blue;
      cursor: pointer;
    }
  }

  .login--buttons {
    //border: 1px solid black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    //position: relative;

    .error--message {
      color: red;
      text-transform: capitalize;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
}
</style>