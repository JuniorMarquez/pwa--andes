import { Component ,  OnInit,Inject} from '@angular/core';
//import * as $ from 'jquery';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TixsService } from "../../services/tixs.service";
import { ProductInfoService } from "../../services/product-info.service";
import { CarService } from "../../services/car.service";
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 

export interface DialogData {
  quan:number;
  size:number;
  car:any[];
  product:{
  	productName:string,
  	itemsPrices:{
  		label:string;
  		price:number;
  	}
  	quan:{};
  }
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {

   title = 'angularowlslider';
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  
  name: string;
  size:number;
  car:any[]=[];
  tix:any[]=[];
  product:any[]=[];
	_albums:any[]=[];
	productsFil:any[]=[];
	imagesG:any[]=[];
	menu:any={};
	quan: number = 3;
	private _album: Array<string> = [];
	constructor(
    public _ps:TixsService, 
    public dialog: MatDialog, 
    public _pi:ProductInfoService,
    public _ca:CarService,
    private dataApi: DataApiService
    ) {
		this.loadImages,open,close
	}

 public tixs:TixInterface;

	openDialog(product): void {
		//console.log('Producto: '+product.productName);
		this.product=product;
		let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      		width: '320px',
      		data: { 
      			quan:this.quan,
      			car:this.car,
      			size:this.size,
      			product: this.product 
      		}
    	});
	    dialogRef.afterClosed().subscribe(result => {
      		this.product = result;
      		console.log('The dialog was closed'+this.product);
      		this._ca.car=this.car;
      		this._ca.size=this.car.length;
      		//console.log("Producto: "+this.car[0].productName+" 1er label : "+this.car[0].itemsPrices[0].label+" 1er price: "+this.car[0].quan[0]);
      		
    	});
  	}

    public loadImages(product){
		this._albums=[];
		this._ps.imagesG=product.imagesG;
		for (var i = 0; i <product.images.length; i++) {
	    	const src = product.imagesG[i];
	    	const caption = '';
	    	const thumb = product.imagesG[i];
	    	const album = {
	         src: src,
	         caption: caption,
	         thumb: thumb
	    	};
	    	this._albums.push(album);
		}
		
	}

   getAllTixs(){
//      this.dataApi.getAllTixs().subscribe(tixs => console.log(tixs));
        this.dataApi
        .getAllTixs()
        .subscribe((tixs: TixInterface) => (this.tixs=tixs));
    }


	public filter(){
		//alert("tamano: "+this._ps.products.length);
		 for (var i=0;i<this._ps.products.length;i++){
        if(this._ps.products[i].status==true){
          this.productsFil.push(this._ps.products[i]);
        }
      }
	}
   	ngOnInit(): void {
        this.getAllTixs();
   		//this.filter();
  		//$.getScript('assets/js/collage.js');
 		//$.getScript('assets/js/custom.js');
		this._ps.imagesG=[];
		this.product=[]	;	
  	}
}	
 
 @Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../pop/dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
 	quan: any = {};
	tix:any[]=[];
  productToAdd:{
    productName:string,
    itemsPrices:{
      label:string;
      price:number;
    }
    quan:{};
  }
  	constructor(
      private dataApi: DataApiService,
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData, 
      public _pi:ProductInfoService
      ) {
  		this.ini();
    }
     public ini(){
     	for(var i = 0; i <20; i++){
     		this.quan[i]=0;
     	} 
    }
	changeAdd(item,i): void{
		this.quan[i]=this.quan[i]+1;
		// console.log( "indice: "+i +" Valor:" +this.quan[i]);
	  //item.quan=this.quan[i];    
  }
	changeRemove(item,i): void{
		if (this.quan[i]>0){
		  this.quan[i]=this.quan[i]-1;
		  //console.log( "indice: "+i +" Valor:" +this.quan[i]);
		  //item.quan=this.quan[i];
    }
	}
  onNoClick(): void {
    this.dialogRef.close();

  }
  ok(): void {
    this.data.product.quan=this.quan;
    this.productToAdd=this.data.product;  
    this.data.car.push({
        productName:this.productToAdd.productName,
        itemsPrices:this.productToAdd.itemsPrices,
        quan:this.productToAdd.quan
        });
    this.dialogRef.close();
  }
}
