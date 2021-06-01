<template>
  <form class="register" @submit.prevent="register">
    <h1>Signup</h1>

    <div class="input--box" :class="{ invalid: $v.name.$error }">
      <label>Name</label>
      <input
        type="text"
        id="name"
        v-model="name"
        @blur="$v.name.$touch()"
        :class="{ invalid: $v.name.$error }"
      />
      <p class="error--message" v-if="!$v.name.minLen">
        Name should be at least 4 charchters
      </p>
    </div>

    <div class="input--box">
      <label :class="{ invalid: $v.email.$error }">EMAIL</label>
      <input
        type="email"
        id="email"
        v-model="email"
        @blur="$v.email.$touch()"
        :class="{ invalid: $v.email.$error }"
      />
      <p class="error--message" v-if="!$v.email.email">
        Please provide a valid email address.
      </p>
    </div>

    <div class="input--box">
      <label>PASSWORD</label>
      <input type="password" v-model="password" @blur="$v.password.$touch()" />
      <p class="error--message" v-if="!$v.password.minLen">
        Password should be at least 6 charchters
      </p>
    </div>

    <div class="input--box">
      <label>CONFIRM PASSWORD</label>
      <input
        type="password"
        v-model="confirmPassword"
        @blur="$v.confirmPassword.$touch()"
      />
      <p class="error--message" v-if="!$v.confirmPassword.sameAs">
        Password doesn't match.
      </p>
    </div>

    <div class="input--box">
      <label>MOBILE</label>
      <input type="number" v-model="mobile" @blur="$v.mobile.$touch()" />
      <p class="error--message" v-if="!$v.mobile.minLen || !$v.mobile.numeric">
        Mobile number shoould be at least 10 numbers
      </p>
    </div>

    <div
      class="input--box"
      style="display: flex; flex-direction: row; justify-content: space-between"
    >
      <label style="display: flex; align-items: center">
        <input
          type="radio"
          value="male"
          v-model="gender"
          style="margin-right: 1rem"
        />
        Male
      </label>

      <label style="display: flex; align-items: center">
        <input
          type="radio"
          value="female"
          v-model="gender"
          style="margin-right: 1rem"
        />
        Female
      </label>
    </div>

    <div class="input--box">
      <label>CITY</label>
      <select name="city" id="city" v-model="city">
        <option v-for="city in cities" :key="city" :selected="city == 'Cairo'">
          {{ city }}
        </option>
      </select>
    </div>

    <button
      type="submit"
      :disabled="$v.$anyError"
      v-if="!this.$store.getters.loading"
    >
      REGISTER
    </button>
    <Spinner width="5em" height="5em" v-else />
    <p
      v-if="this.$store.getters.error !== ''"
      style="color: red; margin-bottom: 1rem"
    >
      {{ this.$store.getters.error }}
    </p>
    <p>Already user ? <span @click="$emit('switchForm')">Login</span></p>
  </form>
</template>

<script>
import {
  required,
  email,
  numeric,
  minLength,
  sameAs,
} from "vuelidate/lib/validators";

import Spinner from "../Spinner/Spinner";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobile: "",
      gender: "male",
      cities: ["Cairo", "Alexandria", "Portsaid", "Ismailia", "Suez"],
      city: "Cairo",
    };
  },

  methods: {
    register() {
      const payload = {
        email: this.email,
        name: this.name,
        mobile: this.mobile,
        password: this.password,
        comfirmPassword: this.confirmPassword,
        code: "2",
        sex: this.gender,
        city: this.city,
      };
      this.$store.dispatch("registerUser", payload);
    },
  },

  components: {
    Spinner,
  },

  validations: {
    name: {
      required,
      minLen: minLength(4),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLen: minLength(6),
    },
    confirmPassword: {
      sameAs: sameAs((vm) => {
        return vm.password;
      }),
    },
    mobile: {
      required,
      numeric,
      minLen: minLength(10),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";

.register {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffff;
  padding: 1rem;
  /*position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);*/
  align-items: center;

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
    }

    label.invalid {
      color: red;
    }

    input.invalid {
      border: 1px solid red;
    }
  }

  button {
    @include loginButton;

    &:disabled {
      background-color: rgb(230, 230, 230);
      cursor: default;
    }
  }

  p {
    font-size: 1.6rem;
    span {
      color: blue;
      cursor: pointer;
    }
  }

  .error--message {
    color: red;
    text-transform: capitalize;
    font-size: 1.5rem;
  }
}
</style>