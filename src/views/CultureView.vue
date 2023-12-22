<template>
  <div style="position: relative" class="background">
    <div class="bottom-bg">
      <div class="top-bg">
        <v-container class="pt-10" style="position: relative;">
          <h1 class="top-text font-playfair">Budaya Kuno</h1>
          <v-row>
            <v-col>
              <v-btn class="button-outlined" to="/"> Kembali </v-btn>
            </v-col>
            <v-col>
              <div class="d-flex align-center justify-center">
                <router-link to="/" style="height: 100%">
                  <img :src="require('@/assets/logo.svg')" alt="Logo" height="70%" class="d-block mr-2" />
                </router-link>
                <router-link to="/" style="text-decoration: none">
                  <h1 class="black--text text-md">Kultura</h1>
                </router-link>
              </div>
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-container>
        <div class="py-16 page-container" style="position: relative">
          <v-container class="pt-16 pb-16">
            <v-row>
              <v-col>
                <div class="d-flex justify-center align-center" style="height: 100%">
                  <img v-if="selectedCulture > 0" style="cursor: pointer" src="../assets/culture/arrow-left.svg"
                    @click="onArrowTap(false)" />
                </div>
              </v-col>
              <v-col cols="8">
                <v-row>
                  <v-col cols="6" class="bg-gradient book-style book-style-left pa-0" style="position: relative">
                    <div class="bg-book pa-6" style="position: absolute; width: 100%"></div>
                    <div class="d-flex justify-center align-center reveal-book">
                      <img :src="require(`@/assets/culture/${cultures[selectedCulture].fileName}.svg`)
                        " style="z-index: 1" />
                    </div>
                  </v-col>
                  <v-col cols="6" class="bg-gradient pa-0 book-style book-style-right" style="position: relative">
                    <div class="image-top reveal-book">
                      <img :src="require(`@/assets/culture/${cultures[selectedCulture].fileName}-top.svg`)
                        " />
                    </div>
                    <div class="bg-book pa-6" style="position: absolute; width: 100%">
                      <div class="reveal-book">
                        <h1 class="text-md">Pulau</h1>
                        <h1 class="font-playfair text-bg text-md">{{ cultures[selectedCulture].title }}</h1>
                        <div class="text-sm mt-4">
                          <span class="font-weight-bold">{{
                            cultures[selectedCulture].culture
                          }}</span>{{ cultures[selectedCulture].cultureDescription }}
                        </div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <div class="d-flex justify-center align-center" style="height: 100%">
                  <img v-if="selectedCulture < cultures.length - 1" style="cursor: pointer"
                    src="../assets/culture/arrow-right.svg" @click="onArrowTap(true)" />
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CultureView",
  data: () => ({
    selectedCulture: 0,
    cultures: [
      {
        title: "Kalimantan",
        fileName: "kalimantan",
        culture: "Tari Kancet Ledo",
        cultureDescription:
          ", tarian perang Dayak Kalimantan Timur, menggambarkan gadis Dayak siap perang, dengan kekuatan, keberanian, dan kesiapan masyarakat Dayak mempertahankan tanah airnya. Tarian ini memiliki makna mendalam sebagai simbol semangat pelestarian warisan budaya.",
      },
      {
        title: "Lombok",
        fileName: "lombok",
        culture: "Kain Sesek Lombok",
        cultureDescription:
          ", kisah benang yang merajut memori, menyapa dengan corak yang menciptakan tarian warna. Seperti peluk embun pagi, setiap helaian mengisahkan keindahan dan kelembutan, menciptakan syair lembut dari kain, saksi bisu seni tangan yang memikat.",
      },
      {
        title: "Papua",
        fileName: "papua",
        culture: "Festival Perahu Lesung",
        cultureDescription:
          " Suku Asmat memikat dengan tarian, merayakan semangat pelestarian warisan budaya Suku Asmat dalam gerak yang gemulai, penuh keindahan, kekuatan, dan kearifan tradisional yang memukau.",
      },
      {
        title: "Jawa",
        fileName: "jawa",
        culture: "Tari Remo",
        cultureDescription:
          ", tari asal Jawa Timur dengan gerakan gemulai dan harmonis, memukau dalam kelompok besar, mengukir keceriaan dan keindahan, menciptakan panorama kekayaan tradisi dan kebanggaan, menari puitis di alam estetik Jawa yang mempesona.",
      },
      {
        title: "Sulawesi",
        fileName: "sulawesi",
        culture: "Tari Pa Gellu",
        cultureDescription:
          " Sulawesi, gerak melambai daun rindang, cerita zaman terbentang. Gemulai langkah, tarian membangkitkan roh leluhur, menciptakan panggung sejarah, dan keindahan berdansa yang memukau secara magis.",
      },
      {
        title: "Bali",
        fileName: "bali",
        culture: "Tari Legong Bali",
        cultureDescription:
          ", gadis-gadis mempesona menari di pelukan malam. Gerakan lembut mengisahkan kisah asmara di antara bunga eksotis, menciptakan panggung keindahan Bali dalam tarian megah yang memukau.",
      },
    ],
  }),
  mounted() {
    this.changePage(0);
  },
  methods: {
    onArrowTap(isNext) {
      let cultureIndex = isNext ? this.selectedCulture + 1 : this.selectedCulture - 1;
      this.changePage(cultureIndex);
    },
    changePage(index) {
      const revealElements = document.querySelectorAll(".reveal-book");

      for (let i = 0; i < revealElements.length; i++) {
        revealElements[i].classList.remove("book-active");

        setTimeout(() => {
          revealElements[i].classList.add("d-none");
          if (this.selectedCulture !== index) this.selectedCulture = index;

          setTimeout(() => {
            revealElements[i].classList.remove("d-none");
            revealElements[i].classList.add("book-active");
          }, 100);
        }, 500);
      }
    }
  }
};
</script>

<style scoped>
.text-bg {
  background: radial-gradient(50% 50% at 50% 50%, #3f600e 0%, #182800 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration-line: underline;
}

.bg-book {
  background: url("../assets/culture/bg-left.svg") no-repeat;
  background-size: cover;
  mix-blend-mode: color-burn;
  height: 100%;
}

.book-style {
  stroke-width: 4px;
  stroke: #3f600e;
  border: 4px solid black;
  border-radius: 2rem;
}

.book-style-left {
  border-radius: 2rem 0 0 2rem;
  border-right: none;
}

.book-style-right {
  border-radius: 0 2rem 2rem 0;
}

.image-top {
  position: absolute;
  right: -5rem;
  top: -4.3rem !important;
}

.top-text {
  text-align: center;
  font-size: 64px;
  font-style: italic;
  font-weight: 500;
  line-height: 56px;
  text-decoration-line: underline;
  position: absolute;
  opacity: 0.24;
  background: radial-gradient(50% 50% at 50% 50%, #78c601 0%, #487701 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 100%;
}

.reveal-book {
  opacity: 0;
  filter: blur(3px);
  transition: all 0.5s ease;
}

.reveal-book.book-active {
  opacity: 1;
  filter: blur(0px);
}
</style>
