/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files
import { aliases, fa } from 'vuetify/iconsets/fa'
import 'vuetify/styles'
import colors from 'vuetify/util/colors'

// Composables
import { createVuetify } from 'vuetify'

const myTheme = {
  colors: {
    primary: colors.blueGrey.darken3,
    'primary-lighten-1': colors.blueGrey.darken2,
    'primary-lighten-2': colors.blueGrey.darken1,
    'primary-lighten-3': colors.blueGrey.base,

    secondary: "#edb976",
    accent: colors.blueGrey.darken4,
    error: colors.red.darken4,
    background: colors.grey.lighten3,

    cinelog_primary: colors.purple.base,
    'cinelog_primary-lighten-1': colors.purple.lighten1,
    'cinelog_primary-lighten-2': colors.purple.lighten2,
    'cinelog_primary-darken-1': colors.purple.base,

    cinelog_secondary: colors.purple.darken3,
    'cinelog_secondary-lighten-1': colors.purple.darken2,
    'cinelog_secondary-darken-1': colors.purple.darken4,

    code_bg: colors.grey.lighten3,


    white_color: "#fff"
  },
}

export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
  theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme
    }
  },
})
