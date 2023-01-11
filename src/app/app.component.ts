import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },    
    { title: 'Produtos', url: '/produtos', icon: 'bag' },    
    { title: 'Favoritos', url: '/favoritos', icon: 'heart' },
    { title: 'Quem Somos', url: '/sobre', icon: 'information' },
    { title: 'Login', url: '/login', icon: 'person' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
