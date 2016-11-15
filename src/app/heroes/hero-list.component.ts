import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from './hero.model';
import {HeroService} from './hero.service';


@Component({
 selector:'hero-list',
 templateUrl: 'hero-list.component.html'
})

export class HeroesComponent implements OnInit{
    heroes: Hero[];
    // selectedHero: Hero;

    constructor(private router: Router, private service: HeroService){}  

    getHeroes(): void {
      this.service.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
      this.getHeroes();
    }

    gotoDetail(hero): void {
      this.router.navigate(['/hero//edit', hero.id]);
    }
    
    // selectHero(Hero: Hero): void{
    //   this.selectedHero = Hero;
    // }
}