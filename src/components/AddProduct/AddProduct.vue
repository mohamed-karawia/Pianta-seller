<template>
  <form>
    <div class="input--box">
      <label>Image</label>
      <input style="border: none" type="file" @change="fileSelected" />
      <div class="predicting" v-if="classifyTypeLoading">
        <Spinner width="2em" height="2em" margin="0" />
        <p>Your imgae is being processed ...</p>
      </div>
      <div class="predicting" v-if="!classifyTypeLoading && fruitType !== ''">
        <p><span>&#9745; </span> fruit is: <span>{{ fruitType }}</span></p>
      </div>
    </div>
  </form>
</template>

<script>
import Spinner from "../Spinner/Spinner";

export default {
  data() {
    return {
      selectedFiles: [],
    };
  },
  methods: {
    fileSelected(event) {
      this.selectedFiles.push(event.target.files[0]);
      const fd = new FormData();
      console.log(fd);
      fd.append("img", this.selectedFiles[0]);
      this.$store.dispatch("classifyAll", fd);
      /**/
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

  p {
    margin-left: 2rem;
    font-size: 1.8rem;


    span{
      color: rgb(38, 187, 63);
      text-transform: capitalize;
    font-weight: 500;

    }
  }
}
</style>