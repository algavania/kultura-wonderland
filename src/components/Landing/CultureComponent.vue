<template>
  <section id="culture" class="my-16 pt-6 pt-lg-16">
    <div class="mt-8">
      <div class="align-center d-flex flex-gap flex-column flex-lg-row">
        <v-col class="image-col flex-1">
          <div class="pa-6 default-border pattern-home-bg">
            <img src="../../assets/home/culture1.svg" width="100%" height="100%" />
          </div>
        </v-col>
        <v-col class="reveal">
          <div class="flex-1">
            <div class="default-badge" style="width: fit-content">
              Budaya Kuno
            </div>
            <div class="text-lg font-weight-bold my-6">
              Bangkitkan
              <span class="font-playfair font-gradient">Budaya Lama,</span>
              Wujud Kearifan
              <span class="font-playfair font-gradient">Lokal Indonesia.</span>
            </div>
            <div class="text-sm">
              <span class="font-weight-bold">Budaya lama Indonesia</span>
              merupakan kekayaan yang tak ternilai harganya. Budaya lama
              Indonesia
              <span class="font-weight-bold">cerminan wujud kearifan lokal</span>
              yang sarat akan nilai-nilai luhur, seperti gotong royong,
              toleransi, dan cinta tanah air. Namun, di tengah arus globalisasi
              yang semakin deras, budaya lama Indonesia kian tergeser. Berbagai
              tradisi dan kesenian tradisional yang telah diwariskan
              turun-temurun mulai ditinggalkan oleh generasi muda.
            </div>
            <v-btn class="button-outlined mt-8">
              Jelajahi Sekarang
            </v-btn>
          </div>
        </v-col>
      </div>
    </div>

    <div class="mt-16 pt-4 pt-lg-16">
      <div class="align-center d-flex flex-gap flex-column flex-lg-row">
        <v-col class="flex-1 order-2 order-lg-1 reveal">
          <div>
            <div class="default-badge" style="width: fit-content">
              Budaya Daerah
            </div>
            <div class="text-lg font-weight-bold my-6">
              Tari Kancet Ledo: Tari Perang Asal <span class="font-playfair font-gradient">Suku Dayak</span>
            </div>
            <div class="text-sm">
              <b>Tari Kancet Ledo</b> merupakan salah satu tari Dayak yang berasal
              dari Kalimantan Timur. Tari ini merupakan tari perang yang
              menggambarkan seorang gadis Dayak yang sedang bersiaga
              menghadapi musuh. Tari Kancet Ledo memiliki makna yang
              mendalam bagi masyarakat Dayak. Tari ini merupakan <b>simbol
                dari kekuatan, keberanian, dan kesiapan masyarakat Dayak</b> untuk
              mempertahankan tanah airnya.
            </div>
            <v-btn class="button-outlined mt-8">
              Jelajahi Sekarang
            </v-btn>
          </div>
        </v-col>
        <v-col class="image-col flex-1 order-1 order-lg-2">
          <div class="pa-6 default-border pattern-home-bg">
            <img src="../../assets/home/culture2.svg" width="100%" height="100%" />
          </div>
        </v-col>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "CultureComponent",
};
</script>

<style scoped>
.image-col {
  width: 100% !important;
}

.flex-gap {
  gap: 4rem;
}

@media (max-width: 960px) {
  .flex-gap {
    gap: 3rem;
  }
}

@media (max-width: 600px) {
  .flex-gap {
    gap: 2rem;
  }
}
</style>
