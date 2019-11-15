import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { ValidationInterface } from '../../models/validation-interface'; 


import { UserWService } from "../../services/user-w.service";
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-valist',
  templateUrl: './valist.component.html',
  styleUrls: ['./valist.component.css']
})
export class ValistComponent implements OnInit {

  constructor(
    private router: Router, 
    private location: Location,
    public _uw:UserWService,
    private dataApi: DataApiService
  	) { }



  public validations:ValidationInterface;
assbook(validation){
  this._uw.assValidation=validation;
   this.router.navigate(['/assbook'])

}
 getValidationPending(){
        this.dataApi
        .getValidationPending()
        .subscribe((validations: ValidationInterface) => (this.validations=validations));
    }
  ngOnInit() {
    this.getValidationPending();
  }

}
