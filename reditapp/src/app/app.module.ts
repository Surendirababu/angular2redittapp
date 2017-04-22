import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent} from './heroes.component';
import { DashboardComponent} from './dashboard.component';

import {Hero} from './hero';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
   {
    path: 'heroes',
    component: HeroesComponent
   },
   {
    path: 'dashboard',
    component: DashboardComponent
   }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
