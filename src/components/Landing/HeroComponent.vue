<template>
    <div class="text-center pt-4 pt-lg-10 ">
        <h1 class="text-xl heading">
            <span class="text-color-primary">“</span>Budaya <span class="text-accent">Tak
                Lekang</span> oleh Zaman, Kita Lestarikan
            Bersama!<span class="text-color-primary">”</span>
        </h1>
        <v-btn class="button-filled mt-6 mb-12 mt-md-8 mb-md-16">
            Jelajah Aneka Ragam Budaya!
        </v-btn>
        <img :src="require('@/assets/img_hero.svg')" style="width: 100%;" />
    </div>
</template>

<script>
export default {
    name: "HeroComponent",
    components: {
    },
    data: () => ({
    }),
};
</script>

<style>
.heading {
    max-width: 800px;
    margin: auto;
}
</style>