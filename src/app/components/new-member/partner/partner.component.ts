import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserInterface } from '../../../models/user-interface'; 
import { CardInterface } from '../../../models/card-interface';  
import { UserWService } from '../../../services/user-w.service';
import { DataApiService } from '../../../services/data-api.service';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { isError } from "util";
import { Location } from '@angular/common';
import { ConfirmEqualValidatorDirective } from '../../../confirm-equal-validator.directive';

import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

declare var NgFormPartner:any;
@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  ngFormPartner: FormGroup;
  submitted = false;

  constructor(
  public _uw:UserWService, 
  private dataApiService: DataApiService,
  private authService: AuthService, 
  private location: Location,
  private router: Router,
  private formBuilder: FormBuilder
  	) { }

  public user : UserInterface ={
    name:"",
    email:"",
    password:""
  };

  public card : CardInterface ={
      userd:"",
      type:"",
      phone:"",
      companyName:"",
      address:"",
      status:"",
      name:""
    };

  public isError = false;
  public isLogged =false;

  ngOnInit() {
  	  this.ngFormPartner = this.formBuilder.group({
      phone: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

   get fval() {
  return this.ngFormPartner.controls;
  }

  sendProfile(){
      this.submitted = true;
      if (this.ngFormPartner.invalid) {
         this._uw.errorFormPartner=true;
      return;
        } 
         this._uw.errorFormPartner=false;
      this.user = this.authService.getCurrentUser();
      let val=(this.user.id).toString();
      this.card = this.ngFormPartner.value;
      this.card.userd="a"+val;
      this.card.type="partnerType";
      this.card.status="pending";
      this.card.name=this.user.name;
      return this.dataApiService.saveCard(this.card)
        .subscribe(
         // card => this.router.navigate(['/mytixs'])
        );
  }    
    
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
 finish(){
  if (this._uw.errorFormPartner){
    this.sendProfile();
  }
  
    this.router.navigate(['/mytixs'])
  }
  reset():void{
    this._uw.selectorA=true;
    this.router.navigate(['/new-member']);
  }


}
