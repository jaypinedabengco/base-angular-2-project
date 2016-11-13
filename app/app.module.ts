/**
 * Modules
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

/* internal modules*/
import { AppRoutingModule } from './app-routing.module';

/**
 * Components
*/
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

/** 
 * Providers
*/
import { HeroService } from './services/hero.service';


@NgModule({
    imports: [ 
      BrowserModule,
      FormsModule,
      AppRoutingModule
    ],
    declarations: [ 
      AppComponent ,
      HeroDetailComponent,
      HeroesComponent, 
      DashboardComponent
    ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})


export class AppModule { 

}