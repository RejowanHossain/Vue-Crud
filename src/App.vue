<template>
  <!-- <Spinner/> -->
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue';
// import Spinner from './components/Spinner.vue';
  export default {
    name: "App",
    components: { Navbar }
}
</script>

<style>

</style>
