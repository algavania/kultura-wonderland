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
            <v-toolbar-items class="toolbar-item" v-if="!hasLogin">
              <div v-for="link in links" :key="link.to">
                <div
                  style="cursor: pointer"
                  :class="link.to == $route.path ? 'button-filled' : ''"
                  class="font-weight-semibold py-2 px-5 ml-3"
                >
                  {{ link.name }}
                </div>
              </div>
            </v-toolbar-items>
            <v-toolbar-items class="toolbar-item" v-else>
              <div class="d-flex align-center">
                <div class="d-flex">
                  <div v-for="link in links" :key="link.to">
                    <v-btn
                      height="50"
                      :active="$route.path == link.to"
                      class="mr"
                      :ripple="false"
                      elevation="0"
                      color="white"
                    >
                      {{ link.name }}
                    </v-btn>
                  </div>
                </div>
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
.v-btn {
  border-bottom: 4px solid transparent;
}

.v-btn--active,
.v-btn:active,
.v-btn:hover {
  border-bottom: 4px solid #064e3b;
  border-radius: 4px !important;
}

.btn-toolbar,
.btn-toolbar:hover {
  border-bottom: none !important;
  border-radius: 12px !important;
}

.appbar-icon {
  display: none;
}

.user-profile-picture {
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  background: white;
  object-fit: contain;
  border: 1px rgba(0, 0, 0, 0.3) solid;
}

.user-menu:hover {
  background-color: #f3f4f6;
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
