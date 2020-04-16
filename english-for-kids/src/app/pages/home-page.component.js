import { WFMComponent } from "../../SPA";

class HomePageComponent extends WFMComponent {
  constructor(config) {
    super(config)
  }
}

export const homePageComponent = new HomePageComponent({
  selector: 'home',
  template: `
  <a href="#" class="container_card"><img src="english-for-kids/src/img/draw.jpg" alt="">Action (set A)</a>
  <a href="#" class="container_card"><img src="english-for-kids/src/img/sing.jpg" alt="">Action (set B)</a>
  <a href="#" class="container_card"><img src="english-for-kids/src/img/cat.jpg" alt="">Animals (set A)</a>
  <a href="#" class="container_card"><img src="english-for-kids/src/img/chick.jpg" alt="">Animals (set B)</a>
  <a href="#" class="container_card"><img src="english-for-kids/src/img/skirt.jpg" alt="">Clothes</a>
  <a href="#" class="container_card"><img src="english-for-kids/src/img/happy.jpg" alt="">Emotions</a>
  <a href="#" class="container_card"><img src="english-for-kids/src/img/cake.jpg" alt="">Food</a>
  <a href="#" class="container_card"><img src="english-for-kids/src/img/sunny.jpg" alt="">Weather</a>`,
})
