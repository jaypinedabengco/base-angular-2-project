import {Component, OnInit} from '@angular/core';

import {Hero} from './../../object_models/hero/hero';
import {HeroService} from './../../services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{

    public heroes: Hero[] = [];

    constructor(private heroService:HeroService){}

    ngOnInit():void{
        this.heroService.getHeroes().then(
            result => this.heroes = result.slice(1,5) //top 4
        )
    }



}