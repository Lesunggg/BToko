import './assets/main.css'
import 'bulma'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHouseChimney , faStore , faCircleInfo, faCartShopping, faCartPlus, faTrash, faFaceFrown, faFaceSadTear} from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faInstagram, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faHouseChimney, faStore, faCircleInfo, faCartShopping, faCartPlus, faTrash, faFaceFrown,faFaceSadTear , faDiscord, faInstagram, faFacebook, faYoutube, faLinkedin)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
