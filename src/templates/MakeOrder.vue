<template>
  <div class="make-order">
    <h2>Monte seu Pedido</h2>

    <Step
      title="Selecione o tamanho: "
      :items="sizes"
      :required="true"
      :onChange="changeSize"
      :value="neworder.size.value"
    />

    <Step
      title="Selecione o sabor: "
      :items="flavors"
      :required="true"
      :onChange="changeFlavor"
      :value="neworder.flavor.value"
    />

    <Step
      title="Personalize seu açaí: "
      :multiple="true"
      :required="false"
      :items="additionals"
      :selectedItems="neworder.additionals"
      :onChange="changeAdditional"
    />

    <button @click="changeStep" :disabled="orderIsInValid">Realizar Pedido</button>
  </div>
</template>

<script>
import {
  sizes,
  flavors,
  additionals,
  urls,
} from "../assets/resources";
import { Order } from "../Order";
import Step from "../components/Step";

export default {
  name: "MakeOrder",  
  components: {
    Step
  },
  data() {
    return {
      sizes,
      flavors,
      additionals,
      neworder: {
        size: {},
        flavor: {},
        additionals: []
      },
      order: new Order()
    };
  },
  computed: {
    orderIsInValid: function() {
      return !this.neworder.size.id || !this.neworder.flavor.id;
    }
  },
  methods: {
    changeFlavor: function(item) {
      this.neworder.flavor = item;
    },

    changeSize: function(item) {
      this.neworder.size = item;
    },

    changeAdditional: function(item) {
      const index = this.neworder.additionals.findIndex(a => a === item);
      if (index >= 0) {
        this.neworder.additionals.splice(index, 1);
      } else {
        this.neworder.additionals.push(item);
      }
    },

    changeStep: function() {
      const { size, flavor, additionals } = this.neworder;
      if (size.id && flavor.id) {
        const additionalprice = additionals.reduce(
          (acc, { price }) => acc + price,
          0
        );
        const additionaltime = additionals.reduce(
          (acc, { additionaltime }) => acc + additionaltime,
          0
        );

        let time = size.time + flavor.additionaltime + additionaltime;
        let price = size.price + additionalprice;

        this.neworder = { ...this.neworder, time, price };
        this.order.setOrder(this.neworder);
        this.$router.push(urls.myorder);
      } else {
        alert("Favor selecionar tamanho e sabor do seu pedido");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.make-order {
  min-width: 35vw;
  min-height: 60vh;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
  background-color: #4b287917;
  h2 {
    color: #4b2879;
  }
}
</style>
