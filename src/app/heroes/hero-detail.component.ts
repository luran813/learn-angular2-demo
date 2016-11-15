import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

require('bootstrap/dist/css/bootstrap.min.css');

import { Hero }    from './hero.model';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  template: `
           <form *ngIf="hero" class="form-horizontal">
            <h2>{{hero.name}} details!</h2>
            <div class="form-group">
              <label class="control-label col-xs-3">ID: </label>
              <div class="col-xs-8">
                <p class="form-control-static">{{hero.id}}</p>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label col-xs-3">name: </label>
              <div class="col-xs-8">
                <input class="form-control input-sm" [(ngModel)]="hero.name" placeholder="name" [ngModelOptions]="{standalone: true}"/>
              </div>
            </div>
            <div class="col-xs-offset-3 col-xs-6">
              <button (click)="save()" class="btn btn-sm btn-info">保存</button>
              <button (click)="goBack()" class="btn btn-sm btn-default">返回</button>
            </div>
           </form>`,
  styles: [`
    button {
      font-size: 16px;
    }
  `]
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
  //修改
  save(): void {
    this.heroService.updateHero(this.hero).then((newhero)=> this.hero = newhero);
  }
  //返回列表
  goBack(): void {
    this.location.back();
  }

}
