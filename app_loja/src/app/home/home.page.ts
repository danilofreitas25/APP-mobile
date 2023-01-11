import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  template: `
    <ion-content>
      <ion-slides pager="true" [options]="slideOpts">
        <ion-slide>
          <h1>Slide 1</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 2</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 3</h1>
        </ion-slide>
      </ion-slides>
    </ion-content>`
})
export class HomePage implements OnInit {
  image = "https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310__340.png";
  image1 = "https://cdn.pixabay.com/photo/2016/03/27/22/16/fashion-1284496__340.jpg";
  image2 = "https://cdn.pixabay.com/photo/2017/07/31/15/06/boot-2558324__340.jpg";
  image3 = "https://media.istockphoto.com/id/1404635567/pt/foto/closeup-of-a-pair-of-black-leather-football-boots-isolated-on-white-background-professional.jpg?b=1&s=170667a&w=0&k=20&c=W3VR1_ZJzwClRYb3-jRdalAZU0UC2cxpygQatdGKQbM=";
  image4 = "https://media.istockphoto.com/id/461051707/photo/tap-shoes.jpg?b=1&s=170667a&w=0&k=20&c=idHFb3FlTPKF64OXYPQ_dEuu8NesqZYr1dvyIo6mR8U=";
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
