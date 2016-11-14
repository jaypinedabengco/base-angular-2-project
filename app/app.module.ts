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

/**
 * Components
*/
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppNavigatorComponent } from './components/app-navigator/app-navigator.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SampleFormComponent } from './components/sample-form/sample-form.component';

/** 
 * Providers
*/

/*services*/
import { SampleService } from './services/sampleService.service';

/*daos*/
import { CountryApi } from './providers/api/studylane-api/impl/country.api';

@NgModule({
    imports: [ 
      BrowserModule,
      FormsModule,
      HttpModule, 
      AppRoutingModule
    ],
    declarations: [ 
      AppComponent,  
      AppHeaderComponent, 
      AppFooterComponent,
      AppNavigatorComponent,

      DashboardComponent,      
      SampleFormComponent
    ],
    providers: [
      //services 
      SampleService,

      //dao
      CountryApi
     ],
    bootstrap: [ AppComponent ]
})


export class AppModule { 

}