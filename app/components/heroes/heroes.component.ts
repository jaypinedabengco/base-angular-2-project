import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { Hero } from './../../object_models/hero/hero';
import { HeroService } from './../../services/hero.service';

@Component({
    moduleId: module.id,
    selector:       'my-heroes', 
    templateUrl:    './heroes.component.html',
    styleUrls : [   './heroes.component.css' ]
})

export class HeroesComponent implements OnInit{

    public heroes:Hero[];
    public selectedHero:Hero;

    /*Constructor*/
    constructor(
        private heroService: HeroService,
        private router: Router
    ){}

    /*ngOnInit*/
    ngOnInit(): void {
        this.getHeroes();
    }

    /*
        Get heroes from heroService and 
        set it on heroes public member
    */
    public getHeroes():void{
        this.heroService.getHeroes().then(
                result => this.heroes = result, //success 
                result => console.log('error') //fail
            );
    }

    /*
        Set a selected hero to 
        the selectedHero public member
    */
    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    /**
     * Go to Details view 
     */
    public gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    } 

    /**
     * Add new Hero
     */
    public add(name: string): void {
        name = name.trim();

        if (!name) 
            return; 

        this.heroService.createHero(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    /**
     * Delete a Hero
     */
    delete(hero: Hero): void {
        this.heroService
            .deleteHero(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
        });
    }
    

}