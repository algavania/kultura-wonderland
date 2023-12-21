<template>
  <div>
    <HeroComponent />
    <AboutComponent />
  </div>
</template>

<script>
import HeroComponent from '@/components/Landing/HeroComponent.vue'
import AboutComponent from '@/components/Landing/AboutComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeroComponent,
    AboutComponent,
  },
}
</script>
