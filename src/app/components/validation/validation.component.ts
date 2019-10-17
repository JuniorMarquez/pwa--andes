import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { DataApiService } from '../../services/data-api.service';
import { ValidationInterface } from '../../models/validation-interface'; 
import { UserWService } from "../../services/user-w.service";
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

ngFormSendValidation: FormGroup;
  submitted = false;

  constructor(
  	 private dataApiService: DataApiService, 
  	 public _uw:UserWService,
	   private formBuilder: FormBuilder
  	) { }

   public validation:ValidationInterface={
     referencia:'',
      nroReserva:1,
      email:'',
      telefono:'',     
      monto:'',     
      status:'pending'
   };


  ngOnInit() {
  	this.ngFormSendValidation = this.formBuilder.group({
      referencia: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      nroReserva: ['', [Validators.required]],
      });
  }


    sendValidation(){
      this.submitted = true;
      if (this.ngFormSendValidation.invalid) {
      return;
        } 
      this.validation = this.ngFormSendValidation.value;
      return this.dataApiService.saveValidation(this.validation)
        .subscribe(
        );   
    
  }



   get fval() {
  return this.ngFormSendValidation.controls;
  }
}
