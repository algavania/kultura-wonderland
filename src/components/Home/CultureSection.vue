<template>
  <section class="culture-section">
    <v-container>
      <v-row>
        <v-col
          class="image-col"
        >
          <div class="pa-6 default-border pattern-home-bg">
            <img
              src="../../assets/home/culture1.svg"
              width="100%"
              height="100%"
            />
          </div>
        </v-col>
        <v-col class="content-col">
          <div class="ml-6">
            <div class="default-badge" style="width: fit-content">
              Budaya Kuno
            </div>
            <div class="text-lg font-weight-bold my-6">
              Bangkitkan
              <span class="font-playfair font-gradient">Budaya lama,</span>
              Wujud Kearifan
              <span class="font-playfair font-gradient">lokal Indonesia.</span>
            </div>
            <div class="text-sm">
              <span class="font-weight-bold">Budaya lama Indonesia</span>
              merupakan kekayaan yang tak ternilai harganya. Budaya lama
              Indonesia
              <span class="font-weight-bold"
                >cerminan wujud kearifan lokal</span
              >
              yang sarat akan nilai-nilai luhur, seperti gotong royong,
              toleransi, dan cinta tanah air. Namun, di tengah arus globalisasi
              yang semakin deras, budaya lama Indonesia kian tergeser. Berbagai
              tradisi dan kesenian tradisional yang telah diwariskan
              turun-temurun mulai ditinggalkan oleh generasi muda.
            </div>
            <div
              class="button-outlined font-weight-semibold py-2 px-5 font-gradient border-green mt-8"
              style="width: fit-content"
            >
              Jelajahi Sekarang!
            </div>
          </div>

          <div class="ml-6" style="margin-top: 4rem">
            <div class="default-badge" style="width: fit-content">
              Budaya Daerah
            </div>
            <div class="text-lg font-weight-bold my-6">
              Tari Kancet Ledo: Tari Perang Asal
              <span class="font-playfair font-gradient">Suku Dayak</span>
            </div>
            <div class="text-sm">
              <span class="font-weight-bold">Tari Kancet Ledo</span>
              merupakan salah satu tari Dayak yang berasal dari Kalimantan
              Timur. Tari ini merupakan tari perang yang menggambarkan seorang
              gadis Dayak yang sedang bersiaga menghadapi musuh. Tari Kancet
              Ledo memiliki makna yang mendalam bagi masyarakat Dayak. Tari ini
              merupakan
              <span class="font-weight-bold"
                >simbol dari kekuatan, keberanian, dan kesiapan masyarakat
                Dayak</span
              >
              untuk mempertahankan tanah airnya.
            </div>
            <div
              class="button-outlined font-weight-semibold py-2 px-5 font-gradient border-green mt-8"
              style="width: fit-content"
            >
              Jelajahi Sekarang!
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "CultureSection",
};
</script>

<style scoped>
.culture-section {
  height: 40rem!important;
}

.image-col {
  position: sticky!important;
  top: 0!important;
  height: 100%!important;
}

.content-col {
  overflow-y: scroll!important;
  height: 40rem!important;
}
</style>
