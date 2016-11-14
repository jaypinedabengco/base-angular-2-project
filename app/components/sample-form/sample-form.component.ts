import {Component, OnInit} from '@angular/core';
import {MdPagination} from "ng2-material";

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
            result=> {
                this.countries = result
                this.refreshCountries();
            },
            (reason)=>console.log("ERROR : ", reason)
        );
    }

    public resetForm(){
        this.formModel = new SampleUserFormModel();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }


    /**
     * Angular material sample
     */

  public pagination = {
    currentPage: 1,
    itemsPerPage: 5,
    totalItems: 24
  };

  public availableLength: Array<number> = [5, 10, 20];
  public pagedCountries: Array<any> = [];

  public refreshCountries():void {
    let start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage,
      end = start + this.pagination.itemsPerPage;
    this.pagedCountries = this.countries.slice(start, end);
  }
  detectChange(event) {
    if (event !== undefined && event.name === 'pagination_changed' && event.pagination !== undefined) {
      this.pagination = event.pagination;
      this.refreshCountries();
    }
  }    

    /**
     * For Testing Purpose
     */
    get diagnostic() { return JSON.stringify(this.formModel); }

}