import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserWService {
	admin:boolean;
	adminName:string;
	affiliate:boolean;
	assBook:any={};
	assValidation:any={};
	bandera:string;
	book:any={};
	card:any={};
	cardsResult:any[]=[];
	editingTrek:boolean=false;
	errorFormAffiliate:boolean;
	errorFormAddtixs:boolean;
	errorFormPartner:boolean;
	file:any[]=[];
	idCard:string;
	images:any[]=[];
	info:any={};
	isLogged:boolean=false;
	loaded:boolean=false;
	name:string;
	partner:boolean;
	queue:any[]=[];
	selectorA:boolean;
	selectorB:boolean;
	tixs:any[]=[];
	totalBooks:number;
	totalTixs:number;
	type:string;
	user:any={};
	userd:string;
	usersPending:boolean;
	userW:any[]=[];
	validation:any={};
	// book:any[]=[];
  constructor() { }
}


