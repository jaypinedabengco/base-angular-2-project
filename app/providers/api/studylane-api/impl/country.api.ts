import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { StudylaneApi } from './../studylane.api';

@Injectable()
export class CountryApi extends StudylaneApi {

    private getCountriesUrl = "/api/country/get-list-with-current-location"; 

    constructor(http:Http){ //damn, stupid workaround :(
        super(http);
    }    

    /**
     * Get List of Countries, including the current Location
     */
    public getCountriesWithCurrentLocation(): Promise<any> {
        return this.post(this.getCountriesUrl);        
    }

}