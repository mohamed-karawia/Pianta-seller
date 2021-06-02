<template>
  <form>
    <div class="input--box">
      <label>Image</label>
      <input style="border: none" type="file" @change="fileSelected" />
    </div>

    <div class="predicting" v-if="classifyTypeLoading">
      <Spinner width="2em" height="2em" margin="0" />
      <p>Your imgae is being processed ...</p>
    </div>
    <div
      class="predicting--result"
      v-if="!classifyTypeLoading && fruitType !== ''"
    >
      <p>
        <span>&#9745; </span> fruit is: <span>{{ fruitType }}</span>
      </p>
      <p style="text-transform: capitalize" v-if="!showFinalForm">
        Not {{ fruitType }} ?
        <span
          style="color: blue; cursor: pointer"
          @click="changeFruit = !changeFruit"
          >Click here
        </span>
      </p>
      <div class="input--box" v-if="changeFruit">
        <label>FRUIT</label>
        <select name="fruit" id="fruit" v-model="fruit">
          <option
            v-for="(fruit, index) in fruits"
            :key="index"
            :selected="fruit == ''"
          >
            {{ fruit }}
          </option>
        </select>
      </div>
    </div>
    <button
      :disabled="selectedFiles.length == 0 || classifyTypeLoading"
      v-if="!showFinalForm"
      @click="showNextForm"
    >
      Next
    </button>

    <div class="finalForm" v-if="showFinalForm">
      <div class="predicting" v-if="classifyFreshLoading">
        <Spinner width="2em" height="2em" margin="0" />
        <p>Your image is being processed ...</p>
      </div>

      <div
        class="predicting--result"
        v-if="!classifyFreshLoading && fruitFresh !== ''"
      >
        <p>
          <span>&#9745; </span> fruit is: <span>{{ fruitFresh }}% fresh</span>
        </p>
      </div>

      <div class="predicting--result" v-if="!classifyFreshLoading"></div>

      <div
        class="input--box"
        style="align-self: center"
        v-if="!classifyFreshLoading"
      >
        <label>Product Name</label>
        <input type="text" v-model="productName" />
      </div>

      <div class="input--box" v-if="!classifyFreshLoading">
        <label>Price</label>
        <input type="text" v-model="price" />
      </div>

      <button
        :disabled="classifyFreshLoading || productName == '' || price == ''"
        @click="addProduct"
        v-if="!productLoading"
      >
        Submit
      </button>
      <Spinner width="2em" height="2em" margin="0" v-else />
    </div>
  </form>
</template>

<script>
import Spinner from "../Spinner/Spinner";

export default {
  data() {
    return {
      selectedFiles: [],
      fruits: ["Bananas", "Apples", "Oranges", "Grapes", "Watermelons"],
      fruit: "",
      changeFruit: false,
      productName: "",
      price: "",
      showFinalForm: false,
    };
  },
  methods: {
    fileSelected(event) {
      this.selectedFiles.push(event.target.files[0]);
      const fd = new FormData();
      console.log(fd);
      fd.append("img", this.selectedFiles[0]);
      this.$store.dispatch("classifyAll", fd);
    },
    showNextForm() {
      this.showFinalForm = true;
      if (
        (this.fruit === "" &&
          (this.fruitType == "apples" ||
            this.fruitType == "bananas" ||
            this.fruitType == "oranges")) ||
        this.fruit == "Bananas" ||
        this.fruit == "Apples" ||
        this.fruit == "Oranges"
      ) {
        const fd = new FormData();
        fd.append("img", this.selectedFiles[0]);
        this.$store.dispatch("classifyFresh", fd);
      }
    },
    addProduct() {
      let productType = "";
      if (this.fruit == "") {
        productType = this.fruitType;
      } else {
        productType = this.fruit;
      }
      const fresh = this.fruitFresh == "" ? "none" : `${this.fruitFresh}%`;
      const fd = new FormData();
      fd.append("img", this.selectedFiles[0]);
      fd.append("productType", productType);
      fd.append("fresh", fresh);
      fd.append("name", this.productName);
      fd.append("price", this.price);
      this.$store.dispatch("addProduct", fd);
      this.fruit = '';
      this.selectedFiles = [];
      this.name = '';
      this.price = '';
      this.$emit('hideBackdrop')
    },
  },
  components: {
    Spinner,
  },
  computed: {
    classifyTypeLoading() {
      return this.$store.getters.classifyTypeLoading;
    },
    fruitType() {
      return this.$store.getters.fruit;
    },
    classifyFreshLoading() {
      return this.$store.getters.classifyFreshLoading;
    },
    fruitFresh() {
      return this.$store.getters.fruitFresh;
    },
    productLoading() {
      return this.$store.getters.productLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/global.scss";

form {
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
}

.input--box {
  @include loginInput;

  label {
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin-bottom: 2px;
    text-transform: capitalize;
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

.predicting {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;

  p {
    margin-left: 2rem;
    font-size: 1.8rem;
  }
}

.predicting--result {
  p {
    margin: 1rem 0;
    font-size: 1.8rem;

    span {
      color: rgb(38, 187, 63);
      text-transform: capitalize;
      font-weight: 500;
    }
  }
}

button {
  border: none;
  background-color: $primary-color;
  color: white;
  align-self: center;
  padding: 1rem 2rem;
  margin: 1rem 0;
  border-radius: 10px;
  cursor: pointer;
  font-size: 2rem;

  &:disabled {
    background-color: rgb(196, 196, 196);
    cursor: default;
  }
}

.finalForm {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>