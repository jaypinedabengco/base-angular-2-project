import {Component, OnInit} from '@angular/core';

import {SampleObject} from './../../object_models/sample/sample';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{

    public sampleObjects: SampleObject[] = [];

    constructor(){}

    ngOnInit():void{
    }



}