<template>
  <div class="gradient-bg">
    <div class="bottom-bg">
      <div class="top-bg">
        <v-container class="py-5" style="position: relative">
          <div
            class="pa-4 pa-sm-8 px-12 background pattern-bg default-border footer-card"
          >
            <div class="d-block d-sm-none font-weight-bold text-sm text-center">
              <div>Techcomfest 2024</div>
              <div>Wonderland Team</div>
            </div>
            <div class="d-none d-sm-block">
              <div class="d-flex justify-space-between">
                <div>Submisi Web untuk</div>
                <div>Dibuat dengan 💚 oleh</div>
              </div>
              <div
                class="d-flex justify-space-between font-weight-bold text-sm"
              >
                <div>Techcomfest 2024</div>
                <div>Wonderland Team</div>
              </div>
            </div>
          </div>
          <div class="d-flex align-center my-4 mt-16">
            <router-link to="/" style="height: 100%">
              <img
                :src="require('@/assets/logo-white.svg')"
                alt="Logo"
                height="55rem"
                class="d-block mr-2"
              />
            </router-link>
            <router-link to="/" style="text-decoration: none">
              <h1 class="white--text text-lg">Kultura</h1></router-link
            >
          </div>
          <v-row>
            <v-col cols="12" md="6" lg="4">
              <div class="white--text text-sm font-weight-light">
                Menerangi keberagaman budaya, memicu minat generasi muda dalam
                warisan luntur melalui inspirasi, pengetahuan, dan pengalaman
                autentik bersama Kultura.
              </div>
              <v-row>
                <div v-for="social in socials" :key="social.icon" class="mt-12">
                  <a :href="social.to"
                    ><img
                      :src="require(`@/assets/footer/${social.icon}`)"
                      class="ml-3"
                  /></a>
                </div>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" lg="4">
              <div style="display: grid" class="justify-sm-center">
                <div class="text-small-md font-weight-bold white--text mb-6">
                  Tautan
                </div>
                <div v-for="link in links" :key="link.to" class="mt-2">
                  <router-link
                    :to="link.to"
                    class="white--text text-sm font-weight-light"
                  >
                    {{ link.name }}</router-link
                  >
                </div>
              </div>
            </v-col>
            <v-col class="d-none d-md-flex d-lg-none" md="3"></v-col>
            <v-col cols="12" md="6" lg="4">
              <div class="default-border pa-6 text-center">
                <div class="text-small-md white--text font-weight-bold">
                  Gabung Komunitas🎉
                </div>
                <div class="text-sm white--text font-weight-light mt-3 mb-4">
                  Jadi bagian dalam wujud perubahan dan pelestarian budaya kita
                  bersama!
                </div>
                <div class="d-flex justify-center">
                  <v-btn
                    class="button-default"
                  >
                    Gabung Sekarang!
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col class="d-none d-md-flex d-lg-none" md="3"></v-col>
          </v-row>
          <div
            class="white--text text-center text-sm font-weight-light mt-8 mb-3"
          >
            © 2023 Wonderland. All rights reserved.
          </div>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
  data: () => ({
    links: [
      { name: "Beranda", to: "/" },
      { name: "Tentang", to: "/about" },
      { name: "Budaya", to: "/culture" },
      { name: "Acara", to: "/event" },
    ],
    socials: [
      { icon: "facebook.svg", to: "https://www.facebook.com/kultura.id" },
      { icon: "instagram.svg", to: "https://www.instagram.com/kultura.id/" },
      { icon: "whatsapp.svg", to: "https://wa.me/kultura" },
      { icon: "youtube.svg", to: "https://www.youtube.com/channel/kultura" },
      { icon: "spotify.svg", to: "https://open.spotify.com/kultura" },
    ],
  }),
};
</script>

<style scoped>
.bottom-bg {
  background-image: url("../assets/footer/bg-bottom.svg") !important;
  background-repeat: no-repeat !important;
  background-position: bottom left;
}
.top-bg {
  background-image: url("../assets/footer/bg-top.svg") !important;
  background-repeat: no-repeat !important;
  background-position: top right;
}

.footer-card {
  position: absolute;
  top: -4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
}

@media only screen and (max-width: 960px) {
  .footer-card {
    width: 70%;
  }
}

@media only screen and (max-width: 600px) {
  .footer-card {
    width: 90%;
  }
}
</style>
