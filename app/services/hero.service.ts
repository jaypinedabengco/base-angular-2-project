import { Injectable } from '@angular/core';

import { Hero } from './../object_models/hero/hero';
import { HEROES } from './mock-data/mock-heroes';

@Injectable()
export class HeroService {

    public getHeroes():Promise<Hero[]> {
        return Promise.resolve(HEROES);
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
}