<template>
  <nav class="pa-0" elevation="0" style="z-index: 100 !important">
    <v-app-bar fixed elevation="0" height="90" color="background" class="pb-4 nav-shadow nav-height">
      <v-container>
        <div class="d-flex">
          <v-col style="position: relative">
            <div class="d-flex align-center">
              <router-link to="/" style="height: 100%">
                <img :src="require('@/assets/logo.svg')" alt="Logo" height="70%" class="d-block mr-2" />
              </router-link>
              <router-link to="/" style="text-decoration: none">
                <h1 class="black--text text-md">Kultura</h1>
              </router-link>
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
          <v-col class="pa-0 flex-grow-1 align-center d-flex justify-end d-lg-none">
            <v-btn icon @click="drawer = !drawer">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-col>
        </div>
      </v-container>

      <v-navigation-drawer v-model="drawer" app right style="background-color: #fafff2 !important" class="d-lg-none">
        <v-list class="my-4">
          <v-list-item v-for="link in links" :key="link.to" link>
            <v-list-item-content>
              <router-link :to="link.to" style="text-decoration: none">
                <v-list-item-title class="text-md">{{ link.name }}</v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
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
    ],
    drawer: false,
  }),
};
</script>

<style scoped>
.nav-shadow {
  box-shadow: 0px var(--8, 8px) var(--32, 32px) 0px rgba(24, 40, 0, 0.04) !important;
  backdrop-filter: blur(calc(var(--56, 56px) / 2)) !;
}

.appbar-icon {
  display: none;
}

@media screen and (max-width: 860px) {
  .nav-height {
    max-height: 90px !important;
  }

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
