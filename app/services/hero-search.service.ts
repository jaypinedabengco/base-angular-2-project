import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

import { Hero } from './../object_models/hero/hero';

@Injectable()
export class HeroSearchService {

    private heroesUrl = 'app/heroes';

    constructor(
        private http: Http
    ) {}

    /**
     * Search heroes using term 
     * NOTE : example for using observable
     */
    public search(term: string): Observable<Hero[]> {
        return this.http
                .get(`app/heroes/?name=${term}`)
                .map((r: Response) => r.json().data as Hero[]);
    }


}