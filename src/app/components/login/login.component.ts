import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from "util";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from "../../services/data-api.service";

DataApiService

declare var NgForm:any;
//comentario
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngFormLogin: FormGroup;
  submitted = false;

  constructor(
    public dataApi:DataApiService,
    public _uw:UserWService,
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router, 
    private location: Location
    ) { }
  public user : UserInterface ={
    name:"",
  	email:"",
  	password:""
  };
  public isError = false;
  public isLogged =false;
  
  ngOnInit() {
    // this.dataApi.setips();
    this.ngFormLogin = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
    });
//    this.onCheckUser();   
}
  get fval() {
  return this.ngFormLogin.controls;
  }
  
  onLogin(){
     this.submitted = true;
      if (this.ngFormLogin.invalid) {
      return;
        } 
//      alert('form fields are validated successfully!');
      return this.authService.loginUser(
        this.user.email, 
        this.user.password
        )
    	.subscribe( 
    		data => {
          //console.log(data);
            	this.authService.setUser(data.user);
            	const token = data.id;
              this.authService.setToken(token);
              this._uw.userd=data.id;
              this._uw.name=data.name;
              this.router.navigate(['/mytixs']);
              this.isError = false;
        },
         error => this.onIsError()
        ); 
  }    
    
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

   onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
         this.isLogged = false;
      this._uw.isLogged=false;
    } else {
      this.isLogged = true;
      this._uw.isLogged = true;
      this.router.navigate(['/mytixs']);
    }
  }
}
