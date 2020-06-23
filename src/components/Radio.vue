<template>
  <div class="step-1">
    <div v-for="item of items" :key="item.id" class="item">
      <div class="radio">
        <input
          type="radio"
          :id="item.id"
          :value="item.id"
          v-model="selected"
          @change="onChange(item)"
        />

        <label :for="item.id">{{ item.title }}</label>
      </div>
      <label v-if="item.price" class="price">{{ convertNumber(item.price) }}</label>
    </div>
  </div>
</template>

<script>
import { convertNumber } from "../assets/resources";

export default {
  name: "Radio",
  props: {
    items: Array,
    value: String,
    onChange: Function
  },
  data() {
    return {
      selected: this.value,
      convertNumber
    };
  }
};
</script>

<style lang="scss" scoped>
.step-1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  .radio {
    display: flex;
    align-items: center;
    label {
      cursor: pointer;
      color: #727577;
      font-size: 18px;
      font-weight: bold;
      margin-left: 10px;
    }
  }
  input {
    height: 25px;
    width: 25px;
    margin: 0;
    cursor: pointer;
  }
  .price {
    font-size: 16px;
  }
}
</style>
