import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface'; 
import { CardInterface } from '../../models/card-interface'; 
import { TixInterface } from '../../models/tix-interface';  
import { UserWService } from '../../services/user-w.service';
import { DataApiService } from '../../services/data-api.service';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { isError } from "util";
import { Location } from '@angular/common';
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';

import { FormBuilder, FormGroup,  Validators } from '@angular/forms';




@Component({
  selector: 'app-addtixs',
  templateUrl: './addtixs.component.html',
  styleUrls: ['./addtixs.component.css']
})
export class AddtixsComponent implements OnInit {

ngFormAddtixs: FormGroup;
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
      address:""
    };
public tix : TixInterface ={
      userd:"",
      productName:"",
      description:"",
      notes:"",
      category:""
    };


  public isError = false;
  public isLogged =false;

  ngOnInit() {
  	 this.ngFormAddtixs = this.formBuilder.group({
      productName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      notes: ['', [Validators.required]],
      category: ['', [Validators.required]]
      });
  }

 get fval() {
  return this.ngFormAddtixs.controls;
  }

  sendTix(){
      this.submitted = true;
      if (this.ngFormAddtixs.invalid) {
         this._uw.errorFormAddtixs=true;
      return;
        } 
         this._uw.errorFormAddtixs=false;
      this.user = this.authService.getCurrentUser();
      let val=(this.user.id).toString();
      this.tix = this.ngFormAddtixs.value;
      this.tix.userd="a"+val;
      this.tix.status="pending";
      return this.dataApiService.saveTixFree(this.tix)
        .subscribe(
         // tix => this.router.navigate(['/mytixs'])
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
      this.sendTix();
    }
    this.router.navigate(['/mytixs'])
  }
  reset():void{
    this._uw.selectorA=true;
    this.router.navigate(['/addtixs']);
  }





}
