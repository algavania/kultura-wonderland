<template>
  <div style="background-color: #FAFFF2;">
    <div class="gradient-bg">
      <div class="bottom-bg">
        <div class="top-bg">
          <div class="page-container">
            <v-container class="py-5" style="position: relative">
              <div class="pa-4 pa-sm-8 px-12 pattern-bg default-border footer-card">
                <div class="reveal">
                  <div class="d-block d-sm-none font-weight-bold text-sm text-center">
                    <div>Techcomfest 2024</div>
                    <div>Wonderland Team</div>
                  </div>
                  <div class="d-none d-sm-block">
                    <div class="d-flex justify-space-between">
                      <div>Submisi Web untuk</div>
                      <div>Dibuat dengan 💚 oleh</div>
                    </div>
                    <div class="d-flex justify-space-between font-weight-bold text-sm">
                      <div>Techcomfest 2024</div>
                      <div>Wonderland Team</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="reveal">
                <div class="d-flex align-center mb-5 mt-16 pt-16">
                  <router-link to="/" style="height: 100%">
                    <img :src="require('@/assets/logo-white.svg')" alt="Logo" class="d-block mr-3 mr-lg-4 logo-size" />
                  </router-link>
                  <router-link to="/" style="text-decoration: none">
                    <h1 class="text-color-white text-lg">Kultura</h1>
                  </router-link>
                </div>
                <v-row>
                  <v-col cols="12" md="6" lg="4">
                    <div class="text-color-white text-sm font-weight-light">
                      Menerangi keberagaman budaya, memicu minat generasi muda dalam
                      warisan luntur melalui inspirasi, pengetahuan, dan pengalaman
                      autentik bersama Kultura.
                    </div>
                    <v-row>
                      <div v-for="social in socials" :key="social.icon" class="mt-12">
                        <a :href="social.to"><img :src="require(`@/assets/footer/${social.icon}`)" class="ml-3" /></a>
                      </div>
                    </v-row>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <div style="display: grid" class="justify-sm-center">
                      <div class="text-sm font-weight-bold text-color-white mb-4">
                        Tautan
                      </div>
                      <div v-for="link in links" :key="link.to" class="mt-1">
                        <router-link :to="link.to" class="text-color-white text-sm font-weight-light">
                          {{ link.name }}</router-link>
                      </div>
                    </div>
                  </v-col>
                  <v-col class="d-none d-md-flex d-lg-none" md="3"></v-col>
                  <v-col cols="12" md="6" lg="4">
                    <div class="default-border pa-6 text-center">
                      <div class="text-sm text-color-white font-weight-bold">
                        Gabung Komunitas🎉
                      </div>
                      <div class="text-sm text-color-white font-weight-light mt-1 mb-4">
                        Jadi bagian dalam wujud perubahan dan pelestarian budaya kita
                        bersama!
                      </div>
                      <div class="d-flex justify-center">
                        <v-btn class="button-default font-button" style="box-shadow: none !important;">
                          Gabung Sekarang!
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col class="d-none d-md-flex d-lg-none" md="3"></v-col>
                </v-row>
              </div>
              <div class="text-color-white text-center text-sm font-weight-light mt-12 mb-6">
                © 2023 Wonderland. All rights reserved.
              </div>
            </v-container>
          </div>
        </div>
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
.footer-card {
  position: absolute;
  top: -4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  border: 0.5px solid #C9E899;
  background-color: #FAFFF2;
}

.text-color-white {
  color: #FAFFF2 !important;
}

.font-button {
  font-size: 0.9rem !important
}

.logo-size {
  width: 3.5rem !important;
}

@media only screen and (max-width: 1024px) {
  .footer-card {
    width: 60%;
  }

}


@media only screen and (max-width: 960px) {
  .footer-card {
    width: 70%;
  }

  .font-button {
    font-size: 0.8rem !important;
  }

  .logo-size {
    width: 2.8rem !important;
  }
}

@media only screen and (max-width: 600px) {
  .footer-card {
    width: 90%;
  }

  .font-button {
    font-size: 0.7rem !important
  }

  .logo-size {
    width: 2.2rem !important;
  }

}
</style>
