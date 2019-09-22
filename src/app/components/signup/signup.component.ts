import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface'; 
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from "util";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
  export class SignupComponent implements OnInit {

  ngFormSignup: FormGroup;
  submitted = false;

  constructor(public _uw:UserWService,private formBuilder: FormBuilder,private authService: AuthService, private router: Router,private location:Location) { }
  public user : UserInterface ={
  	name:"",
  	email:"",
  	password:""
  };

  public isError = false;
  public isLogged =false;
  public msgError = '';

  ngOnInit() {
    this.ngFormSignup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    });
      }
  

    onRegister(): void {
    if (this.ngFormSignup.valid){
      this.authService
        .registerUser(this.user.name, this.user.email, this.user.password)
        .subscribe(user => {
          this.authService.setUser(user);
          const token = user.id;
          this._uw.userd=token;
          this.authService.setToken(token);
         this.router.navigate(['/mytixs']);
          //location.reload();
        },
        res => {
          this.msgError = res.error.error.details.messages.email;
          this.onIsError();
        });
    } else {
      this.onIsError();
    }

  }



  get fval() {
  return this.ngFormSignup.controls;
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
      this._uw.isLogged=true;
      this.router.navigate(['/mytixs']);
    }
  }
}
