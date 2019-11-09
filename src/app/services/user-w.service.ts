import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserWService {
info:any={};
isLogged:boolean=false;
	adminName:string;
	admin:boolean;
	affiliate:boolean;
	bandera:string;
	book:any={};
	card:any={};
	cardsResult:any[]=[];
	errorFormAffiliate:boolean;
	errorFormAddtixs:boolean;
	errorFormPartner:boolean;
	file:any[]=[];
	idCard:string;
	images:any[]=[];
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


