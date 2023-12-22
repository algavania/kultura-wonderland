<template>
    <nav class="pa-0" elevation="0" style="z-index: 100 !important">
        <v-app-bar fixed elevation="0" height="100" color="white" class="pt-1 pb-4">
            <v-container>
                <div class="d-flex">
                    <v-col style="position: relative">
                        <router-link to="/" class="text-decoration-none">
                            <v-row class="align-center">
                                <img :src="require('@/assets/img_logo.svg')" alt="Logo" height="33rem" class="d-block" />
                                <h3 class="text-md ml-2">Kultura</h3>
                            </v-row>
                        </router-link>
                    </v-col>
                </div>
            </v-container>
        </v-app-bar>

    </nav>
</template>
  
  
<script>
export default {
    name: "NavBar",
    components: {
    },
    data: () => ({
        links: {
            navbar: [{
                text: "Beranda",
                to: "/",
            },
            {
                text: "Tentang",
                to: "/",
            },
            {
                text: "Budaya",
                to: "/",
            },
            {
                text: "Acara",
                to: "/",
            },
            ],
        },
    }),
};
</script>
  
<style></style>