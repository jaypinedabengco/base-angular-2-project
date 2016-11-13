import { Component } from '@angular/core';

@Component({
    selector: 'base-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `
    ,
    styleUrls: [ 'app/app.component.css' ] /*investigate, should work even if 'app.component.css'*/
})

export class AppComponent{

    public title:string = 'Tour of Heroes';

}