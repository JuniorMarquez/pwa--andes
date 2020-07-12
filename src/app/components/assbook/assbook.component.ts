import { Component, OnInit } from '@angular/core';

import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';

import { FormBuilder, FormGroup,  Validators } from '@angular/forms';


import { UserWService } from "../../services/user-w.service";
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { BookInterface } from '../../models/book-interface'; 
import { Router } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-assbook',
  templateUrl: './assbook.component.html',
  styleUrls: ['./assbook.component.css']
})
export class AssbookComponent implements OnInit {

  constructor(
  public _uw:UserWService,
  private location: Location,
  private router: Router,
  private dataApi: DataApiService,
  private formBuilder: FormBuilder
  	 ) { }
  public books:BookInterface;
  public book:BookInterface;
  ngFormAssbook: FormGroup;
 

 trackBook(index: number, book:any) {
        // console.log(hero);
        return book ? book.id : null;
    }
  getDetailBook(id: string){
    this.dataApi.getBookById(id).subscribe((res:any)=> {
          this._uw.assBook=res;
          this._uw.assBook.status="Confirmada";
          this.updateBook(id);
          this._uw.validationEmail.nombre=this._uw.assBook.nombre;
          this._uw.validationEmail.asunto="Reserva Confirmada";
          this._uw.validationEmail.email=this._uw.assBook.email;
          this._uw.validationEmail.nroReserva=this._uw.assBook.nroReserva;
          this.updateValidation(this._uw.assValidation.id);
        });
  }

 getBookPending(){
        this.dataApi
        .getBookPending()
        .subscribe((books: BookInterface) => (this.books=books));
    }

updateBook(id: string){
  this._uw.assBook.referencia=this._uw.assValidation.referencia;
   this.dataApi.updateBook(this._uw.assBook, id).subscribe();
}
updateValidation(id: string){
   this._uw.assValidation.status="Confirmada";
   this.dataApi.updateValidation(this._uw.assValidation, id).subscribe();
    this.dataApi.senMailNewValidationAppToUser(this._uw.validationEmail).subscribe(); 
    

}
  
  updates(){
    let id = this.ngFormAssbook.value.nroReservaSelected;
    this.getDetailBook(id);
    this.router.navigate(['/successa']);    
  }

  get fval() {
  return this.ngFormAssbook.controls;
  }
  ngOnInit() {
    this.getBookPending();
     this.ngFormAssbook = this.formBuilder.group({
      nroReservaSelected: ['', [Validators.required]],
      });
  }

}
