import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/hero-list.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroService } from './heroes/hero.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers:[
    HeroService
  ],
  // exports: [AppComponent],
  bootstrap: [ AppComponent ]
  // entryComponents: [ AppComponent ]
})

export class AppModule { }
