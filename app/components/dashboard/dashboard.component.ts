import {Component, OnInit} from '@angular/core';

import {SampleObjectModel} from './../../object_models/sample/sample.object-model';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{

    public sampleObjects: SampleObjectModel[] = [];

    constructor(){}

    ngOnInit():void{
    }



}