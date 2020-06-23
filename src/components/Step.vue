<template>
  <div class="step">
    <div class="title">
      <h4>{{ title }}</h4>
      <label v-if="required">*</label>
    </div>

    <Radio v-if="!multiple" :items="items" :onChange="onChange" value="value" />

    <Checkbox
      v-if="multiple"
      :items="items"
      :onChange="onChange"
      :selectedItems="selectedItems"
    />
  </div>
</template> 

<script>
import Radio from "../components/Radio";
import Checkbox from "../components/Checkbox";

export default {
  name: "Step",
  props: {
    title: String,
    items: Array,
    required: Boolean,
    value: String,
    selectedItems: Array,
    multiple: Boolean,
    onChange: Function
  },
  components: {
    Radio,
    Checkbox
  }
};
</script>

<style lang="scss" scoped>
.step{
    margin: 15px 15px;
    .title {
        display: flex;
        margin-bottom: 15px;
        color: #4b2879;
        h4 {
            margin: 0;
            margin-top: 8px;
        }
        label {
            font-size: 25px;
            color: #bf0909;
            margin-left: 5px;
        }
    }
}
</style>
