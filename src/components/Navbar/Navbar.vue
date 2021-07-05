<template>
  <nav>
    <div class="upper--nav">
      <div class="nav--logo" @click="$router.push('/')">
        <h1>Pianta <span>seller</span></h1>
      </div>

      <ul class="nav--list">
        <li class="nav--list__item">
          <router-link to="/" exact>Orders</router-link>
        </li>

        <li class="nav--list__item">
          <router-link to="/products">My products</router-link>
        </li>

        <li class="nav--list__item" @click="logout">
          <button to="/login">Logout</button>
        </li>
      </ul>

      <svg class="nav--icon" @click="showMobileMenu = !showMobileMenu">
        <use xlink:href="../../assets/sprite.svg#icon-menu"></use>
      </svg>

      <div :class="[showMobileMenu ? 'mobile--menu open' : 'mobile--menu']">
        <ul class="mobile--nav--list">
          <li class="mobile--nav--list__item" @click="showMobileMenu = false">
            <router-link to="/">HOME</router-link>
          </li>
          <li class="mobile--nav--list__item" @click="showMobileMenu = false">
            <router-link to="/products">My products</router-link>
          </li>
          <li class="mobile--nav--list__item" @click="logout">
            <button>LOGOUT</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      showSearch: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.showMobileMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";

.upper--nav {
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  background-color: $primary-color;
  padding: 0 2rem;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

.nav--logo {
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  span {
    font-size: 1.3rem;
    font-weight: 700;
  }
}

.mobile--menu {
  left: 0%;
  width: 100vw;
  height: 100%;
  background-color: $primary-color;
  position: fixed;
  top: -100%;
  opacity: 0;
  display: flex;
  justify-content: center;
  z-index: 999;
  padding: 2rem 0;
  transition: all 0.3s ease-in-out;

  @media only screen and (min-width: 501px) {
    display: none;
  }
}

.nav--list {
  height: 7vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  //width: 35%;
  min-width: 40rem;
  //border: 1px solid black;

  @media only screen and (max-width: 500px) {
    display: none;
  }

  &__item {
    //border: 1px solid red;
    height: 100%;
    width: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s all;

    &:hover {
      background-color: white;

      a {
        color: $primary-color;
      }

      button {
        color: $primary-color;
      }
    }

    button {
      background-color: transparent;
      border: none;
      color: white;
      font-size: 1.8rem;
      font-weight: 600;
      cursor: pointer;
    }

    a {
      @include link;
      color: white;
      font-size: 1.8rem;
      font-weight: 600;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.nav--icon {
  width: 2.5rem;
  height: 2.5rem;
  fill: white;
  align-self: center;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (min-width: 501px) {
    display: none;
  }
}

#mobile--icon {
  fill: black;
  cursor: pointer;
}

.mobile--menu.open {
  top: 8vh;
  opacity: 100%;
}

.mobile--nav--list {
  // height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  &__item {
    color: white;
    font-size: 1.8rem;
    font-weight: 700;

    a {
      @include link;
      color: white;
    }

    button {
      background-color: transparent;
      border: none;
      font-size: 1.8rem;
      color: white;
      font-weight: 700;
      cursor: pointer;
    }
  }
}

a.router-link-active{
  background-color: white;
  color: $primary-color;
}
</style>