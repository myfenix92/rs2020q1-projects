import { WFMComponent } from "../../SPA";

class CardPageComponent extends WFMComponent {
  constructor(config) {
    super(config)
  }
}

export const cardPageComponent = new CardPageComponent({
  selector: 'card',
  template: `
  <a class="card" id="card_item"><img src="english-for-kids/src/img/sunny.jpg" alt="" id="img_card"><p>Weather</p></a>`,
})
