import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from './hero.model';
import {HeroService} from './hero.service';


@Component({
 selector:'hero-list',
 templateUrl: 'hero-list.component.html',
 styleUrls: ['hero-list.component.css']
})

export class HeroesComponent implements OnInit{
    heroes: Hero[];
    selectedHero: Hero;
    number: number;

    constructor(private router: Router, private service: HeroService){}  

    ngOnInit(): void {
      this.getHeroes();
    }
    //查询列表
    getHeroes(): void {
      this.service.getHeroes().then(heroes => this.heroes = heroes);
      this.number = 4;
    }

    //跳转到明晰
    gotoDetail(): void {
      this.router.navigate(['/hero/edit', this.selectedHero.id]);
    }
    //选择当前
    selectHero(Hero: Hero): void{
      this.selectedHero = Hero;
    }
    
    //新增／删除
    add(name: string): void{
      let num = this.number + 1;
      var newHero = new Hero(num, name);
      this.heroes.push(newHero);
    }
}