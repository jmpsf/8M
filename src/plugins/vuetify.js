// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/lib/iconsets/fa'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})
