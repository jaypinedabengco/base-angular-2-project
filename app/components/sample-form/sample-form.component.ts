import {Component, OnInit} from '@angular/core';

import {SampleUserFormModel} from './../../form_models/sample/sample-user.form-model';
import {Country} from './../../object_models/sample/country.object-model';

import { SampleService } from './../../services/sampleService.service';

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
        private sampleService:SampleService
    ){}

    ngOnInit():void{
        //trigger function for updating countries list from API
        this.getCountries();
    }

    public onSubmit(){
        console.log(this.formModel);
    }

    public getCountries():void{
        //will change to a service with HTTP API call
        this.sampleService.getCountries().then(
            result=> this.countries = result,
            (reason)=>console.log("ERROR : ", reason)
        );
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