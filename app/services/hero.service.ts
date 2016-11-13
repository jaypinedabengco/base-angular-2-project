import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './../object_models/hero/hero';

@Injectable()
export class HeroService {

    private heroesUrl = 'app/heroes';

    constructor(
        private http: Http
    ) {}

    public getHeroes():Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(response=> response.json().data as Hero[])
                    .catch(this.handleError);
    }

    public getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000))
            .then(() => this.getHeroes()
        );
    }

    public getHero(id:number):Promise<Hero> {
        return this.getHeroes().then(heroes=> heroes.find(hero=> hero.id === id));
    }

    private handleError(reason:string):void {
        console.log('error : ' + reason);
    }
}