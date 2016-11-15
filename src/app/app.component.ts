import { Component } from '@angular/core';

import { Hero } from './heroes/hero.model';

// import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  template: `<div class="main">
               <h1>{{title}}</h1>
               <nav>
                 <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
                </nav>
                <router-outlet></router-outlet>
              </div>`,
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title: 'Tour of Heroes';
}
