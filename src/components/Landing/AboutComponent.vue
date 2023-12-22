<template>
    <div id="about" class="d-flex flex-column flex-lg-row align-center mt-16 pt-2 pt-lg-16 flex-gap">
        <div class="flex-1 mt-10 reveal">
            <h2 class="text-lg">
                Ragam <span class="text-accent">Budaya Kuno</span> Asal <span class="text-accent">Indonesia</span>
            </h2>
            <p class="text-sm mt-6 mb-6 lg-mb-10">Dalam gemuruh mesin dan hiruk kota, <b>bisikan warisan budaya nyaris tak
                    terdengar.</b> Tapi hei, kawula muda, dengarkanlah! Di sela nada modern, masih berdenyut irama kuno,
                syair leluhur berbisik tentang akar. <b>Mari kita selami, bukan sekadar tahu,</b> tapi rasakan denyut nadi
                peradaban, peluk kehangatan <b>tradisi yang hampir redup.</b></p>
            <v-btn class="button-outlined">
                Jelajahi Sekarang
            </v-btn>
        </div>
        <div class="flex-1" style="width: 100% !important;">
            <img :src="require('@/assets/img_about.svg')" style="width: 100%;" />
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutComponent",
    components: {
    },
    data: () => ({
    }),
};
</script>

<style>
.flex-gap {
    gap: 14rem;
}

@media (max-width: 960px) {
    .flex-gap {
        gap: 4rem;
    }
}

@media (max-width: 600px) {
    .flex-gap {
        gap: 3rem;
    }
}
</style>