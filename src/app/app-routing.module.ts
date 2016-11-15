import { NgModule }      from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HeroesComponent } from './heroes/hero-list.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/edit/:id', component: HeroesComponent },  
 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

