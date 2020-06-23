<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  button {
    cursor: pointer;
    border: none;
    background-color: #4b2879;
    color: #fff;
    font-weight: bold;
    min-width: 120px;
    padding: 0 15px;
    min-height: 40px;
    border-radius: 4px;
  }
  button:disabled {
    cursor: default;
    background-color: #b7b7b7 !important;
    color: #313131c4 !important;
  }
  button:enabled:hover{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
    min-width: 122px;
    min-height: 42px;
  }
}
</style>