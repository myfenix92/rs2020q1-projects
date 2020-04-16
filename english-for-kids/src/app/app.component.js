import { WFMComponent } from '../SPA'

class AppComponent extends WFMComponent {
  constructor(config) {
    super(config)
  }
}

export const appComponent = new AppComponent({
  selector: 'app-root',
  template: `<card></card>`,
})