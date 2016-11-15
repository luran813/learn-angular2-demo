import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero }    from './hero.model';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  template: `
           <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
              <label>name: </label>
              <p class="form-control-static">{{hero.name | uppercase}}</p>
            </div>
           </div>`
})
// <input [(ngModel)]="hero.name" placeholder="name"/>
export class HeroDetailComponent implements OnInit{
  hero: Hero;
  // @Input()  hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero=> this.hero = hero);

    });
  }

}
