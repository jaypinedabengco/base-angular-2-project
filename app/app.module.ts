/**
 * Modules
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

/* internal modules*/
import { AppRoutingModule } from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

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
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
    imports: [ 
      BrowserModule,
      FormsModule,
      HttpModule, 
      InMemoryWebApiModule.forRoot(InMemoryDataService),
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