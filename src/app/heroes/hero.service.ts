import { Injectable }      from '@angular/core';

import {Hero} from './hero.model';

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]>{
    let heroes = [ 
      new Hero(1,'Afdmadsdsdf'),
      new Hero(2,'Gsdmclsmsld'),
      new Hero(3,'KsoraonMsdos'),
      new Hero(4,'Tdjkddlscn')
    ];
    
    return Promise.resolve(heroes);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  updateHero(hero: Hero): Promise<Hero> {
    return Promise.resolve(hero);
  }
}