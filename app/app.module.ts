import './rxjs-extensions'; //RXJS extensions

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
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; /*FOR DEMO ONLY*/

/**
 * Components
*/
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroSearchComponent} from './components/hero-search/hero-search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

/** 
 * Providers
*/
import { HeroService } from './services/hero.service';
import { InMemoryDataService }  from './in-memory-data.service'; /*FOR DEMO ONLY*/

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
      HeroSearchComponent, 
      DashboardComponent
    ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})


export class AppModule { 

}