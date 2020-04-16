import { WFMModule } from '../SPA/index'
import { appComponent } from './app.component'
import { appRoutes } from './app.routes'
import { homePageComponent } from './pages/home-page.component'

class AppModule extends WFMModule {
  constructor(config) {
    super(config)
  }
}

export const appModule = new AppModule({
  components: [
    // homePageComponent
  ],
  bootstrap: appComponent,
  routes: appRoutes,
})
