<template>
  <v-app>
    <NavBar />
    <router-view class="pt-16 mt-16" style="height: 100%"></router-view>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./core/NavBar.vue";
import Footer from "./core/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
* {
  font-family: "Sora", sans-serif !important;
  color: #182800;
}

.page-container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 8rem;
}

/* 56px */
.text-xl {
  font-size: 3rem !important;
  line-height: 130%;
}

/* 48px */
.text-lg {
  font-size: 2.7rem !important;
  line-height: 120%;
}

/* 32px */
.text-md {
  font-size: 1.7rem !important;
}

/* 24px */
.text-small-md {
  font-size: 1.5rem !important;
}


/* 16px */
.text-sm {
  font-size: 1.04rem !important;
  line-height: 200%;
}

.font-weight-semibold {
  font-weight: 600 !important;
}

.text-color-primary {
  background: radial-gradient(50% 50% at 50% 50%, #78c601 0%, #487701 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-accent {
  font-weight: 500 !important;
  font-style: italic !important;
  font-family: "Playfair Display", serif !important;
  background: radial-gradient(50% 50% at 50% 50%, #78c601 0%, #487701 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.text-accent::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 5.5px;
  width: 100%;
  height: 0.8px;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    #78c601 0%,
    #487701 100%
  );
}

.gradient-bg {
  background: radial-gradient(50% 50% at 50% 50%, #78C601 0%, #487701 100%)!important;
}

.button-filled {
  color: #ffffff !important;
  border-radius: 1000px !important;
  padding: 1.3rem 1.4rem !important;
  background: radial-gradient(50% 50% at 50% 50%, #78c601 0%, #487701 100%);
  box-shadow: 0px var(--12, 12px) var(--24, 24px) 0px rgba(120, 198, 1, 0.64) !important;
  text-transform: capitalize !important;
  letter-spacing: 0 !important;
  font-size: 0.9rem !important;
  font-weight: 700 !important;
  cursor: pointer;
}

.button-default {
  color: black !important;
  border-radius: 1000px !important;
  padding: 0.8rem 1.5rem !important;
  background-color: white!important;
  letter-spacing: 0 !important;
  font-size: 1.04rem !important;
  font-weight: 700 !important;
  cursor: pointer;
  text-align: center;
}
.button-outlined {
  color: #60a001 !important;
  background-color: #fafff2 !important;
  border: 2px solid #78c601;
  border-radius: 1000px !important;
  padding: 1.3rem 1.4rem !important;
  text-transform: capitalize !important;
  letter-spacing: 0 !important;
  font-size: 0.9rem !important;
  font-weight: 700 !important;
  box-shadow: none !important;
}
</style>
