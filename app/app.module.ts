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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


/** 
 * Providers
*/

@NgModule({
    imports: [ 
      BrowserModule,
      FormsModule,
      HttpModule, 
      AppRoutingModule
    ],
    declarations: [ 
      AppComponent, 
      DashboardComponent, 
      HeaderComponent, 
      FooterComponent
    ],
    providers: [  ],
    bootstrap: [ AppComponent ]
})


export class AppModule { 

}