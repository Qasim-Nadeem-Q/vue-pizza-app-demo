<template>
  <div class="wrapper ">
    <Sidebar />
    <div class="main-panel">
      <!-- <div class="content"> -->
        <div class="container-fluid">
          <div class="row">
            <router-view></router-view>
          <!-- </div> -->
        </div>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>

import Sidebar from '@/components/sidebar.vue';
// import Footer from "./components/sidebar/footer.vue";

export default {
  name: 'App',
  components: {
    Sidebar,
    // Footer,
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
