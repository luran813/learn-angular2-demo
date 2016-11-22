import { NgModule }      from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/hero-list.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'hero/edit/:id', component: HeroDetailComponent },  
 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

