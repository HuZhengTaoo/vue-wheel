<template>
  <div id="app">
    <listview/>
  </div>
</template>

<script>
import Listview from 'components/listview/listview.vue'

export default {
  name: 'app',
  components: {
    Listview
  }
}
</script>

<style>
#app {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
}
</style>
