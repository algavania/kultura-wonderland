import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: {
        background: "#FAFFF2",
        primary: "#487701",
        lightGreen: '#487701',
      },
    },
  },
});

