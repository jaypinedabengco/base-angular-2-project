import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './../../services/hero.service';
import { Hero } from './../../object_models/hero/hero';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html', 
  styleUrls: [ './hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit {

    @Input()
    public hero:Hero;

    constructor(
      private heroService:HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(){
      this.route.params.forEach((params:Params) => {
        let id = +params['id'];
        this.heroService.getHero(id).then(
          result => this.hero = result,
          () => console.log('error on get hero')
        );
      });
    }

    public goBack():void {
      return this.location.back();
    }

}
