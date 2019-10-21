import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { ValidationInterface } from '../../models/validation-interface'; 

@Component({
  selector: 'app-valist',
  templateUrl: './valist.component.html',
  styleUrls: ['./valist.component.css']
})
export class ValistComponent implements OnInit {

  constructor(private dataApi: DataApiService
  	) { }

  public validations:ValidationInterface;
 getValidationPending(){
        this.dataApi
        .getValidationPending()
        .subscribe((validations: ValidationInterface) => (this.validations=validations));
    }
  ngOnInit() {
    this.getValidationPending();
  }

}
