<template>
  <v-app style="background-color: #FAFFF2 !important;">
    <div class="page-container">
      <!-- <NavBar /> -->

      <v-main>
        <router-view />
      </v-main>

    </div>
  </v-app>
</template>

<script>
// import NavBar from "./core/NavBar.vue";

export default {
  name: 'App',
  components: {
    // NavBar
  },
  data: () => ({

  }),
};
</script>

<style>
* {
  font-family: 'Sora', sans-serif !important;
  color: #182800;
}

.page-container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 8rem;
}

.text-xl {
  font-size: 3rem !important;
  line-height: 130%;
}

.text-md {
  font-size: 1.7rem !important;
}

.text-color-primary {
  background: radial-gradient(50% 50% at 50% 50%, #78C601 0%, #487701 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-accent {
  font-weight: 500 !important;
  font-style: italic !important;
  font-family: 'Playfair Display', serif !important;
  background: radial-gradient(50% 50% at 50% 50%, #78C601 0%, #487701 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.text-accent::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 5.5px;
  width: 100%;
  height: 0.8px;
  background-image: radial-gradient(50% 50% at 50% 50%, #78C601 0%, #487701 100%);
}

.button-filled {
  font-family: 'Sora', sans-serif !important;
  color: #FFFFFF !important;
  border-radius: 1000px !important;
  padding: 1.3rem 1.4rem !important;
  background: radial-gradient(50% 50% at 50% 50%, #78C601 0%, #487701 100%);
  box-shadow: 0px var(--12, 12px) var(--24, 24px) 0px rgba(120, 198, 1, 0.64) !important;
  text-transform: capitalize !important;
  letter-spacing: 0 !important;
  font-size: 0.9rem !important;
}
</style>