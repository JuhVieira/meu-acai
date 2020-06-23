<template>
  <div class="my-order" v-if="order.data">
    <div>
      <h2>Meu Pedido</h2>
      <div class="title">
        <p>{{ order.data.flavor.title }} - {{ order.data.size.title }}</p>
        <p>{{ convertNumber(order.data.size.price) }}</p>
      </div>
      <h4 v-if="order.data.additionals.length">Observações:</h4>
      <div class="additional" v-for="additional of order.data.additionals" v-bind:key="additional.id">
        <p>{{ additional.title }}</p>
        <p class="price">{{ convertNumber(additional.price) }}</p>
      </div>
    </div>
    <div>
      <div class="time">
        <p>Tempo de preparo:</p>
        <p>{{ convertTime(order.data.time) }}</p>
      </div>
      <div class="total">
        <h3>Total:</h3>
        <p class="price">{{ convertNumber(order.data.price) }}</p>
      </div>
      <button @click="changeStep">Finalizar pedido</button>
    </div>
  </div>
</template>

<script>
import {
  convertNumber,
  convertTime,
  urls
} from "../assets/resources";

import { Order } from "../Order";

export default {
  name: "MyOrder",
  data() {
    return {
      order: new Order(),
      convertNumber,
      convertTime
    };
  },
  mounted: function() {
    if (!this.order.data) {
      this.$router.push(urls.neworder);
    }
  },
  methods: {
    changeStep: function() {
      this.order.finishOrder();
      this.$router.push(urls.neworder);
    }
  }
};
</script>

<style lang="scss" scoped>
.my-order {
  min-width: 35vw;
  min-height: 60vh;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  background-color: #4b287917;
  color: #4b2879;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    color: #4b2879;
  }
  h4 {
    text-align: start;
    margin: 30px 0 10px 0;
  }
  button {
    width: 80%;
  }
  .title {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 18px;
  }
  .time {
    display: flex;
    justify-content: space-between;
    text-align: start;
    font-weight: lighter;
    color: #8c8c8c;
    p {
      margin-bottom: 10px;
    }
  }
}
.item-detail {
  display: flex;
}
.additional {
  display: flex;
  justify-content: space-between;
  p {
    margin: 10px 0;
  }
}
.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    margin-left: 10px;
  }
}
</style>
