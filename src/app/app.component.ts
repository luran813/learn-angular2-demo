import { Component } from '@angular/core';

import { Hero } from './heroes/hero.model';

// import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
             <hero-list></hero-list>`
  // styleUrls: ['./app.component.css']
})


// <nav>
//     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
//     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
//   </nav>
//   <router-outlet></router-outlet>
export class AppComponent {
  title: string;

  constructor(){
    this.title = 'Tour of Heroes';
  }
  
  
}
