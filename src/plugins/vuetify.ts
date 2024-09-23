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
    secondary: "#edb976",
    accent: colors.blueGrey.darken4,
    error: colors.red.darken4,
    background: colors.grey.lighten3,
    cinelog_primary: "#320b86",
    cinelog_secondary: "#790e8b",
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
