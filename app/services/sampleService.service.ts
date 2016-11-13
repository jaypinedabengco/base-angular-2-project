import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Country } from './../object_models/sample/country.object-model';

//DAOS
import { CountryApi } from './../providers/api/studylane-api/impl/country.api';

@Injectable()
export class SampleService {

    constructor(
        private countryApi: CountryApi
    ){}

    public getCountries(): Promise<Country[]> {
        return this.countryApi.getCountriesWithCurrentLocation()
                .then(result=>{
                        console.log(result); 
                        return result.country_list as Country[]
                });
        
        /*return this.http.get(this.getCountriesUrl)
                    .toPromise()
                    .then(response=> response.json().data as Country[])
                    .catch(this.handleError)
        */
                
    }    

}