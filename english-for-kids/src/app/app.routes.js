import { cardPageComponent } from "./pages/card-page.component";
import { homePageComponent } from "./pages/home-page.component";

export const appRoutes = [
   { path: '', component: homePageComponent },
  { path: 'card', component: cardPageComponent }
]
