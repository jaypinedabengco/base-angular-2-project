import {Component, OnInit} from '@angular/core';

import {SampleUserFormModel} from './../../form_models/sample/sample-user.form-model';
import {Country} from './../../object_models/sample/country.object-model';

/**
 * Transfer to a service
 */
const COUNTRIES: Country[] = [
    { id: 1 , name : 'Australia'},
    { id: 2 , name : 'USA'}
]
/**
 * END
 */

@Component({
    moduleId: module.id,
    selector: 'sample-form',
    templateUrl: './sample-form.component.html',
    styleUrls: [ './sample-form.component.css' ]
})
export class SampleFormComponent implements OnInit{

    public active:boolean = true;
    public submitted:boolean = false;
    
    public formModel:SampleUserFormModel = new SampleUserFormModel();
    public countries:Country[] = [];
    
    constructor(
    ){}

    ngOnInit():void{
        //get countries on initialize
        this.countries = this.getCountries();
    }

    public onSubmit(){
        console.log(this.formModel);
    }

    public getCountries():Country[]{
        //will change to a service with HTTP API call
        return COUNTRIES;
    }

    public resetForm(){
        this.formModel = new SampleUserFormModel();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    /**
     * For Testing Purpose
     */
    get diagnostic() { return JSON.stringify(this.formModel); }

}