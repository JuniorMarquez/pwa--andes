import { FilePickerComponent } from '../../../assets/file-picker/src/lib/file-picker.component';
import { ValidationError } from '../../../assets/file-picker/src/lib/validation-error.model';
import { FilePreviewModel } from '../../../assets/file-picker/src/lib/file-preview.model';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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

// import { HttpClient } from  '@angular/common/http';
import { DemoFilePickerAdapter } from  '../../file-picker.adapter';

@Component({
  selector: 'app-tix-detail',
  templateUrl: './tix-detail.component.html',
  styleUrls: ['./tix-detail.component.css']
})
export class TixDetailComponent implements OnInit {

    adapter = new DemoFilePickerAdapter(this.http,this._uw);
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
   myFiles: FilePreviewModel[] = [];

  tituloAlerta:string='';
  ngFormAddtixs: FormGroup;
  ngFormSendBook: FormGroup;
  submitted = false;

  constructor(
      private  http: HttpClient,
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

  public tix:TixInterface;

// public tix : TixInterface ={
//       address:"",
//       altitud:"",
//       cantD:0,
//       capacidad:0,
//       category:"",
//       description:"",
//       desLg:"",
//       dificulty:"",
//       disponibilidad:"",
//       distancia:"",
//       duracion:"",
//       images:[],
//       notes:"",
//       precio:0,
//       productName:"",
//       status:"",
//       temp:"",
//       tips:"",
//       userd:"",
//     };

  public isError = false;
  public isLogged =false;

public editImages(){
  this._uw.editImages = true;
  console.log("hoaaaa");
}

  editTrek(){
    this._uw.editingTrek = true;
    this._uw.images=this.tix.images;

  }

  getInfo(){
       this.dataApi
        .getInfo().subscribe((res:any) => {
        this._uw.info=res[0];
        // console.log(this._uw.info.titular);
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
    // console.log(this.book.nroReserva);
    this.book.precioUni=this.tix.precio;
    this.book.monto=this.tix.precio*this.ngFormSendBook.value.cant;
    this.book.adelanto=(this.tix.precio*this.ngFormSendBook.value.cant)*(30/100);
    this.book.resto=this.book.monto*70/100;
    this.book.asunto="Nueva reserva";
 
    this.book.productName=this.tix.productName;
    this.book.fecha=this.selDate.date+" /"+(this.selDate.month+1)+" /"+this.selDate.year;
    this._uw.book=this.book;
    this._uw.book.adminName=this._uw.info.adminName;
    this._uw.book.adminEmail=this._uw.info.adminEmail;
    this._uw.book.men1=this._uw.info.men1;
    this._uw.book.numeroCuenta=this._uw.info.numeroCuenta;
    this._uw.book.rut=this._uw.info.rut;
    this._uw.book.titular=this._uw.info.titular;
    this._uw.book.emailContacto=this._uw.info.emailContacto;
    this._uw.book.telefonoContacto=this._uw.info.telefonoContacto;
    // this.dataApi.saveBook(this.book);
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

  // sendTix(){
  //   this.dataApi.updateTix(tix: TixInterface);
  // }


 sendTix(id: string){
    // this._uw.images=this.tix.images;
      this.submitted = true;
      if (this.ngFormAddtixs.invalid) {
         this._uw.errorFormAddtixs=true;
      return;
        } 
      this._uw.errorFormAddtixs=false;
      // this.user = this.authService.getCurrentUser();
      // let val=(this.user.id).toString();
      this.tix = this.ngFormAddtixs.value;
      // this.tix.userd="a"+val;
      this.tix.status="activated";
      this.tix.images=this._uw.images;
      

      return this.dataApi.updateTix(this.tix, id)
        .subscribe(
            tix => this.router.navigate(['/treklist'])
        );
  }    
    
  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }
 finish(id: string){
    if (this._uw.errorFormAddtixs){
      this.sendTix(id);
    }
    
  }



  public selDate = { date:1, month:1, year:1 };
  public images:any[]=[];
  ngOnInit() {
    
    this.getInfo();
    this.ngFormSendBook = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        email: ['', [Validators.required]],
        cant: ['', [Validators.required]],
        });
     this._uw.errorFormAddtixs=false;
     this.ngFormAddtixs = this.formBuilder.group({
      address: ['', [Validators.required]],
      altitud: ['', [Validators.required]],
      cantD: ['', [Validators.required]],
      capacidad: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],      
      desLg: ['', [Validators.required]],      
      dificulty: ['', [Validators.required]],
      distancia: ['', [Validators.required]],
      duracion: ['', [Validators.required]],
      precio:['',[Validators.required]],
      productName: ['', [Validators.required]],
      temp: ['', [Validators.required]],
      tips: ['', [Validators.required]],
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
      this._uw.editImages=false;

    }
  
  get fval2() {
    return this.ngFormSendBook.controls;
  }

 get fval() {
  return this.ngFormAddtixs.controls;
  }
  getDetails(id: string){
  	this.dataApi.getTixById(id).subscribe(tix => (this.tix = tix));
    
  }

  reset():void{
    this._uw.selectorA=true;
    this.router.navigate(['/addtixs']);
  }
   onValidationError(e: ValidationError) {
    console.log(e);
  }
  onUploadSuccess(e: FilePreviewModel) {
   // console.log(e);
  // console.log(this.myFiles);
  this.images=this._uw.file;
  }
  onRemoveSuccess(e: FilePreviewModel) {
    console.log(e);
  }
  onFileAdded(file: FilePreviewModel) {
    
    file.fileName="https://db.andesproadventures.com:80/imgApi/server/local-storage/tixsImages/"+file.fileName;
    this.myFiles.push(file);
    // this.images.push(file.fileName);

  }

  removeFile() {
  this.uploader.removeFileFromList(this.myFiles[0].fileName);
  }



}
