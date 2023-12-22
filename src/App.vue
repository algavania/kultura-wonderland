<template>
  <v-app>
    <NavBar v-if="isShowAppBar" />
    <div v-if="isShowAppBar" class="pb-16 background"></div>
    <router-view style="height: 100%"></router-view>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./core/NavBar.vue";
import Footer from "./core/Footer.vue";

export default {
  name: "App",
  data: () => ({
    isShowAppBar: true,
  }),
  created() {
    this.$watch(
      () => this.$route.path,
      () => {
        this.checkAppBar();
      }
    );
  },
  mounted() {
    this.checkAppBar();
  },
  components: {
    NavBar,
    Footer,
  },
  methods: {
    checkAppBar() {
      this.isShowAppBar = this.$route.path != "/culture";
    },
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

/* 16px */
.text-sm {
  font-size: 1.04rem !important;
  line-height: 200%;
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

.button-filled {
  color: #ffffff !important;
  cursor: pointer !important;
  border-radius: 1000px !important;
  padding: 1.3rem 1.4rem !important;
  background: radial-gradient(50% 50% at 50% 50%, #78c601 0%, #487701 100%);
  box-shadow: 0px var(--12, 12px) var(--24, 24px) 0px rgba(120, 198, 1, 0.64) !important;
  text-transform: capitalize !important;
  letter-spacing: 0 !important;
  font-size: 0.9rem !important;
  font-weight: 700 !important;
}

.button-outlined {
  color: #60a001 !important;
  cursor: pointer !important;
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

.flex-1 {
  flex: 1 !important;
}

.font-playfair {
  font-family: "Playfair Display" !important;
  font-weight: 500;
  font-style: italic;
  text-decoration-line: underline !important;
}

.font-gradient {
  background: radial-gradient(50% 50% at 50% 50%, #78c601 0%, #487701 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-gradient {
  background: radial-gradient(50% 50% at 50% 50%, #bdbf77 0%, #898c35 100%);
}

.border-green {
  border: 1px solid #78c601 !important;
}

.font-weight-semibold {
  font-weight: 600 !important;
}

.gradient-bg {
  background: radial-gradient(
    50% 50% at 50% 50%,
    #78c601 0%,
    #487701 100%
  ) !important;
}

.button-default {
  color: black !important;
  border-radius: 1000px !important;
  background-color: white !important;
  letter-spacing: 0 !important;
  font-size: 1.04rem !important;
  font-weight: 700 !important;
  cursor: pointer;
  text-align: center;
  padding: 1.3rem 1.4rem !important;
  text-transform: none !important;
}
.pattern-bg {
  background-image: url("assets/footer/pattern.svg") !important;
  background-repeat: no-repeat !important;
  background-size: cover;
}

.pattern-home-bg {
  background-image: url("assets/home/pattern.svg") !important;
  background-repeat: no-repeat !important;
  background-size: cover;
}

.default-border {
  border-radius: 1rem !important;
  border: 0.5px solid #c9e899 !important;
  box-shadow: 0px -8px var(--32, 32px) 0px rgba(24, 40, 0, 0.04) !important;
}

.default-badge {
  border-radius: 12px;
  border: 1px solid #78c601;
  background: #aedd67;
  padding: 0.3rem 1.2rem;
  font-weight: bold;
  width: 100%;
  height: 100%;
}

.bottom-bg {
  background-image: url("assets/footer/bg-bottom.svg") !important;
  background-repeat: no-repeat !important;
  background-position: bottom left;
}
.top-bg {
  background-image: url("assets/footer/bg-top.svg") !important;
  background-repeat: no-repeat !important;
  background-position: top right;
  width: 100%;
  height: 100%;
}

@media (max-width: 960px) {
  .page-container {
    padding: 0 4rem;
  }

  /* 56px */
  .text-xl {
    font-size: 2rem !important;
  }

  /* 48px */
  .text-lg {
    font-size: 1.7rem !important;
  }

  /* 32px */
  .text-md {
    font-size: 1.1rem !important;
  }

  /* 16px */
  .text-sm {
    font-size: 0.9rem !important;
  }

  .button-filled,
  .button-outlined {
    padding: 1rem 1.4rem !important;
    font-size: 0.8rem !important;
  }
}

@media (max-width: 600px) {
  .page-container {
    padding: 0 2.5rem;
  }

  /* 56px */
  .text-xl {
    font-size: 1.7rem !important;
  }

  /* 48px */
  .text-lg {
    font-size: 1.6rem !important;
  }

  /* 32px */
  .text-md {
    font-size: 1rem !important;
  }

  /* 16px */
  .text-sm {
    font-size: 0.8rem !important;
  }

  .button-filled,
  .button-outlined {
    padding: 1rem 1.2rem !important;
    font-size: 0.7rem !important;
  }
}
</style>
