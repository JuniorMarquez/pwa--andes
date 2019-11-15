import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataApiService } from '../../services/data-api.service';
import { ContactInterface } from '../../models/contact-interface'; 

import { UserWService } from "../../services/user-w.service";
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';

import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

   ngFormSendContact: FormGroup;
  constructor(
  	 private router: Router, 
    private location: Location,
    private dataApi: DataApiService,
    public _uw:UserWService,
    private formBuilder: FormBuilder

  	) { }
  public contact:ContactInterface;


  sendContact(){
    this.contact=this.ngFormSendContact.value;
  	this.dataApi.senMailNewContactAppToAdmin(this.contact).subscribe(); 
  }

  ngOnInit() {
  	 this.ngFormSendContact = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        email: ['', [Validators.required]],
        mensaje: ['', [Validators.required]],
        });
  }

}
