import { Injectable }      from '@angular/core';

import {Hero} from './hero.model';

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]>{
    let heroes = [ 
      new Hero(1,'aaa'),
      new Hero(2,'rhhtft'),
      new Hero(3,'jgkkh'),
      new Hero(4,'ryrth')
    ];
    
    return Promise.resolve(heroes);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
}