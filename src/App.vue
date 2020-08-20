<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <div class="hero-body is-info is-large">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>
<style lang="scss">

</style>
