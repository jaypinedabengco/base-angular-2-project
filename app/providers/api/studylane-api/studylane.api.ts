import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export abstract class StudylaneApi {

    private baseUrl = "https://api-prod.qcapsstudylane.com";
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http:Http
    ){}

    /**
     * GET request
     */
    public get( api:string ) {
        let _url = `${this.baseUrl}${api}`;

        return this.http.get(_url)
                    .toPromise()
                    .then(response=> response.json().reference_data)
                    .catch(this.handleError)               
    }

    /**
     * POST request
     */
    public post( api:string, data:any={} ) {

        let _url = `${this.baseUrl}${api}`;
        let _data = JSON.stringify(data);
        let _headers = {headers: this.headers}

        return this.http.post(_url, _data, _headers)
                    .toPromise()
                    .then(response=> response.json().reference_data)
                    .catch(this.handleError)             
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }        
}