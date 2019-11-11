import { Component, OnInit } from '@angular/core';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';

import { ScrollTopService }  from '../../services/scroll-top.service';
import { DataApiService } from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { BookInterface } from '../../models/book-interface'; 
import { InfoInterface } from '../../models/info-interface'; 

import { UserWService } from "../../services/user-w.service";
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

import { HttpClient } from  '@angular/common/http';

import { ActivatedRoute, Params} from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';

import { XunkCalendarModule } from '../../../xunk-calendar/xunk-calendar.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-tix-detail',
  templateUrl: './tix-detail.component.html',
  styleUrls: ['./tix-detail.component.css']
})
export class TixDetailComponent implements OnInit {

  tituloAlerta:string='';
  ngFormSendBook: FormGroup;
  submitted = false;

  constructor(
    private router: Router, 
    private location: Location,
    public scrollTopService:ScrollTopService,
    private dataApi: DataApiService,
    private route:ActivatedRoute,
    public _uw:UserWService,
    private formBuilder: FormBuilder
   ) { }

  loadAPI = null;
  url = "assets/themekit/scripts/glide.min.js"
  public infos:InfoInterface; 

  public book:BookInterface={
    adelanto:0,
    adminName:'',
    asunto:'',
    cant:1,
    email:'',
    fecha:'',
    monto:0,
    nombre:'',
    nroReserva:0,
    personas:1,
    precioUni:1,
    resto:0,
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
    capacidad:1,
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
    userd:''
  };

  public isError = false;
  public isLogged =false;

  getInfo(){
       this.dataApi
        .getInfo().subscribe((res:any) => {
        this._uw.info=res[0];
        console.log(this._uw.info.titular);
      });
    }

  public aleatorio(a,b) {
    return Math.round(Math.random()*(b-a)+parseInt(a));
  }

  public sendBook(){
    this.submitted = true;
      if (this.ngFormSendBook.invalid) {
      return;
        } 
    this.book = this.ngFormSendBook.value;
    this.book.status="pending";
    this.book.nroReserva=this.aleatorio(10000,99999);
    console.log(this.book.nroReserva);
    this.book.precioUni=this.tix.precio;
    this.book.monto=this.book.precioUni*this.ngFormSendBook.value.cant;
    this.book.adelanto=(this.book.precioUni*this.ngFormSendBook.value.cant)*(30/100);
    this.book.resto=this.book.monto*70/100;
    this.book.asunto="Nueva reserva";
    this.book.adminName=this._uw.adminName;
    this.book.productName=this.tix.productName;
    this.book.fecha=this.selDate.date+" /"+(this.selDate.month+1)+" /"+this.selDate.year;
    this._uw.book=this.book;
    this.router.navigate(['/checkout'])
  }

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
    this.getInfo();
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
      this.getDetails(this.route.snapshot.paramMap.get('id'));
    }
  
  get fval() {
    return this.ngFormSendBook.controls;
  }
  getDetails(id: string){
  	this.dataApi.getTixById(id).subscribe(tix => (this.tix = tix));
  }
}
