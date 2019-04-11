<template>
  <div id="app">
    <create-poster/>
  </div>
</template>

<script>
import Listview from 'components/listview/listview.vue'
import CreatePoster from 'components/create-poster/create-poster'
export default {
  name: 'app',
  components: {
    Listview,
    CreatePoster
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
