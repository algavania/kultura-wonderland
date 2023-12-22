<template>
  <nav class="pa-0" elevation="0" style="z-index: 100 !important">
    <v-app-bar
      fixed
      elevation="0"
      height="100"
      color="background"
      class="pt-1 pb-4"
    >
      <v-container>
        <div class="d-flex">
          <v-col style="position: relative">
            <div class="d-flex align-center">
              <router-link to="/" style="height: 100%">
                <img
                  :src="require('@/assets/logo.svg')"
                  alt="Logo"
                  height="70%"
                  class="d-block mr-2"
                />
              </router-link>
              <router-link to="/" style="text-decoration: none">
                <h1 class="black--text text-md">Kultura</h1></router-link
              >
            </div>
          </v-col>
          <v-col class="flex-grow-1 align-center d-flex justify-end">
            <v-toolbar-items class="toolbar-item">
              <div v-for="link in links" :key="link.to">
                <v-btn v-if="link.to == $route.path" :class="link.to == $route.path ? 'button-filled' : ''">{{
                  link.name
                }}</v-btn>
                <div v-else class="font-weight-semibold py-2 px-5 ml-3" style="cursor: pointer;">{{ link.name }}</div>
              </div>
            </v-toolbar-items>
          </v-col>
        </div>
      </v-container>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    links: [
      { name: "Beranda", to: "/" },
      { name: "Tentang", to: "/about" },
      { name: "Budaya", to: "/culture" },
      { name: "Acara", to: "/event" },
    ],
    drawer: false,
  }),
};
</script>

<style scoped>
.appbar-icon {
  display: none;
}
@media screen and (max-width: 860px) {
  .logo-img {
    height: 42px;
    width: 42px;
  }

  .toolbar-item {
    display: none;
  }

  .appbar-icon {
    display: initial;
  }
}
</style>
