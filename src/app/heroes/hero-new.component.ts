import { Component } from '@angular/core';

import { Hero }    from './hero.model';

@Component({
  selector: 'hero-new',
  templateUrl: 'hero-new.component.html'
})
export class HeroNewComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Haha', this.powers[0]);

  submitted = false;
  onSubmit() { 
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
