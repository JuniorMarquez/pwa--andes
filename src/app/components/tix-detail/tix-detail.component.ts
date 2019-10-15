import { Component, OnInit } from '@angular/core';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';

import { ScrollTopService }  from '../../services/scroll-top.service';
import { DataApiService } from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { BookInterface } from '../../models/book-interface'; 

import { UserWService } from "../../services/user-w.service";
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';

import { ActivatedRoute, Params} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';

import { XunkCalendarModule } from '../../../xunk-calendar/xunk-calendar.module';



@Component({
  selector: 'app-tix-detail',
  templateUrl: './tix-detail.component.html',
  styleUrls: ['./tix-detail.component.css']
})
export class TixDetailComponent implements OnInit {

ngFormSendBook: FormGroup;
  submitted = false;

  constructor(public scrollTopService:ScrollTopService,
  private dataApi: DataApiService,
   private route:ActivatedRoute,
   public _uw:UserWService,

  private formBuilder: FormBuilder
   ) { }
  loadAPI = null;
  url = "assets/themekit/scripts/glide.min.js"

   public book:BookInterface={
       adelanto:'',
      cant:1,
      email:'',
      fecha:'',
      monto:'',
      nombre:'',
      precioUni:1,
      resto:'',
      status:'pending'
   };

public tix:TixInterface= {
	category:'',
	description:'',
	productName:'',
	notes:'',
	images: ['', ''],
  cantD:0,
  precio:0,
  capacidad:0,
  altitud:'',
  temp:'',
  duracion:'',
  disponibilidad:'',
  distancia:'',
  dificulty:'',
  desLg:'',
  tips:'',
  address:'',
  status:'',
  userd:'',
  personas:1
};
 public isError = false;
  public isLogged =false;
 public sendBook(){
   this.submitted = true;
      if (this.ngFormSendBook.invalid) {
         // this._uw.errorFormSendTixs=true;
      return;
        } 
      // this._uw.errorFormSendTixs=false;
      // this.user = this.authService.getCurrentUser();
      // let val=(this.user.id).toString();
      this.book = this.ngFormSendBook.value;
      // this.tix.userd="a"+val;
      this.book.status="pending";
      this.book.adelanto="30%";
      this.book.resto="70%";
      this.book.precioUni=9;
      this.book.monto='2000';
      this.book.fecha=this.selDate.date+" /"+(this.selDate.month+1)+" /"+this.selDate.year;
      // this.tix.images=this._uw.images;
     // this._uw.book=this.book;
      return this.dataApi.saveBook(this.book)
        .subscribe(
         // tix => this.router.navigate(['/mytixs'])
        );
 }
 // public sendMail(){
 //     return this.dataApi.senMail(this.book)
 //        .subscribe(
 //         // tix => this.router.navigate(['/mytixs'])
 //        )
 // }

   public loadScript() {
      console.log("preparing to load...");
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }

public selDate = { date:1, month:1, year:1 };
  ngOnInit() {

 this.ngFormSendBook = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      cant: ['', [Validators.required]],
     
      });




      this.selDate = XunkCalendarModule.getToday();  
  if (this._uw.loaded==true){
         this.loadAPI = new Promise(resolve => {
          console.log("resolving promise...");
          this.loadScript();
        });
      }
    this._uw.loaded=true;

   this.scrollTopService.setScrollTop();
//  	const tix_id: string=this.route.snapshot.paramMap.get('id');
  	this.getDetails(this.route.snapshot.paramMap.get('id'));

  }
getDetails(id: string){
	this.dataApi.getTixById(id).subscribe(tix => (this.tix = tix));
}
}
