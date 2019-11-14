import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { DataApiService } from '../../services/data-api.service';
import { ValidationInterface } from '../../models/validation-interface'; 
import { UserWService } from "../../services/user-w.service";
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
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
    private router: Router, 
    private location: Location,
  	 private dataApiService: DataApiService, 
  	 public _uw:UserWService,
	   private formBuilder: FormBuilder
  	) { }

   public validation:ValidationInterface={
     referencia:'',
      nroReserva:'',
      email:'',
      telefono:'',     
      monto:'',     
      status:'pending'
   };

     public sendMailValidation(){
   // this.dataApi.saveBook(this._uw.book)
   //      .subscribe();  
   // this.dataApiService.senMailNewValidationAppToUser(this._uw.validation).subscribe();
   this.dataApiService.senMailNewValidationAppToAdmin(this._uw.validation).subscribe(); 

    }

    getInfo(){
       this.dataApiService
        .getInfo().subscribe((res:any) => {
        this._uw.info=res[0];
        console.log(this._uw.info.titular);
      });
    }


  ngOnInit() {
     this.getInfo();
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
      this.validation.status="pending";
      this._uw.validation.asunto="Confirmacion de reserva";
      // this.validation.adminEmail=this._uw.info.adminEmail;
      // this.validation.adminName=this._uw.info.adminName;
      this._uw.validation=this.validation;
      this._uw.validation.adminEmail=this._uw.info.adminEmail;
      this._uw.validation.adminName=this._uw.info.adminName;
      this.sendMailValidation();
      // this.dataApiService.saveValidation(this.validation)
      //   .subscribe(
      //   );   
        console.log("se desplaza");
            this.router.navigate(['/successvalidation'])
  }



   get fval() {
  return this.ngFormSendValidation.controls;
  }
}
