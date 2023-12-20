<template>
  <v-app>
    <NavBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import NavBar from "./core/NavBar.vue";

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: 'Sora', "Roboto", sans-serif !important;
  color: #182800;
}

.text-md {
  font-size: 1.7rem !important;
}
</style>