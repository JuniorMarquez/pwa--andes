import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { TixInterface } from '../models/tix-interface';
import { BookInterface } from '../models/book-interface';
import { CardInterface } from '../models/card-interface';
import { InfoInterface } from '../models/info-interface';
import { ValidationInterface } from '../models/validation-interface';
import { UserWService } from "./user-w.service";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
	tixs: Observable<any>;
	tix: Observable<any>;
	cards: Observable<any>;
	card: Observable<any>;
	info: Observable<any>;
	books: Observable<any>;
	book: Observable<any>;
	validations: Observable<any>;
	validation: Observable<any>;
  constructor(
  	public _uw:UserWService,
  	private http: HttpClient, 
  	private authService:AuthService
  	) {}

  	headers : HttpHeaders = new HttpHeaders({
  		"Content-Type":"application/json",
  		Authorization: this.authService.getToken()
  		});
  	// 
  	getBookPending(){
		const url_api='https://db.andesproadventures.com:3003/api/books?filter[where][status]=pending';
		return (this.books = this.http.get(url_api));
	}
	getValidationPending(){
		const url_api='https://db.andesproadventures.com:3003/api/validations?filter[where][status]=pending';
		return (this.books = this.http.get(url_api));
	}


	getAllTixs(){
		const url_api = 'https://db.andesproadventures.com:3003/api/product?filter[where][status]=activated';
		return this.http.get(url_api);

	}
	getAllTixsReturn(){
		const url_api = 'https://db.andesproadventures.com:3003/api/product?filter[where][status]=activated';
		return (this.tixs = this.http.get(url_api));

	}
	getTixById(id:string){
		//console.log(id);
		let indice = id;
		const url_api=`https://db.andesproadventures.com:3003/api/product/${indice}`;
		this.tix = this.http.get(url_api);
		return (this.tix);
	}
	getCardById(id:string){
		let indice = id;
		const url_api=`https://db.andesproadventures.com:3003/api/card/${indice}`;
		this.card = this.http.get(url_api);
		return (this.card);
	}
	getInfo(){
		// let indice = id;
		const url_api=`https://db.andesproadventures.com:3003/api/infos/`;
		this.info = this.http.get(url_api);
		return (this.info);
	}
	getPending(){
		const url_api='https://db.andesproadventures.com:3003/api/product?filter[where][status]=pending';
		return (this.tixs = this.http.get(url_api));
	}
	getUsersPending(){
		const url_api='https://db.andesproadventures.com:3003/api/card?filter[where][status]=pending';
		return (this.cards = this.http.get(url_api));
	}

	getActivePartners(){
		const url_api='https://db.andesproadventures.com:3003/api/card?filter[where][and][0][status]=active&filter[where][and][1][type]=partnerType';
		return (this.cards = this.http.get(url_api));
	}
	getPendingPartners(){
		const url_api='https://db.andesproadventures.com:3003/api/card?filter[where][and][0][status]=pending&filter[where][and][1][type]=partnerType';
		return (this.cards = this.http.get(url_api));
	}

	getActiveAffiliates(){
		const url_api='https://db.andesproadventures.com:3003/api/card?filter[where][and][0][status]=active&filter[where][and][1][type]=affiliateType';
		return (this.cards = this.http.get(url_api));
	}
	getPendingAffiliates(){
		const url_api='https://db.andesproadventures.com:3003/api/card?filter[where][and][0][status]=pending&filter[where][and][1][type]=affiliateType';
		return (this.cards = this.http.get(url_api));
	}
	saveTix(tix :TixInterface){
		let token = this.authService.getToken();
		const url_api='https://db.andesproadventures.com:3003/api/product?access_token${token}';
		return this.http
		.post<TixInterface>(url_api, tix,{headers: this.headers})
		.pipe(map(data => data));
	}
	saveTixFree(tix :TixInterface){
	//	let token = this.authService.getToken();
		const url_api='https://db.andesproadventures.com:3003/api/product';
		return this.http
		.post<TixInterface>(url_api, tix)
		.pipe(map(data => data));
	}
	updateTix(tix: TixInterface){
		let token = this.authService.getToken();
		const url_api='https://db.andesproadventures.com:3003/api/product?access_token${token}';
		return this.http
		.put<TixInterface>(url_api, tix,{headers: this.headers})
		.pipe(map(data => data));
	}
	deleteTix(id: string){
		let token = this.authService.getToken();
		const url_api='https://db.andesproadventures.com:3003/api/product?access_token${token}';
		return this.http
		.delete<TixInterface>(url_api, {headers: this.headers})
		.pipe(map(data => data));
	}
	getCards(id:string){
		let indice = id;
		const url_api = "https://db.andesproadventures.com:3003/api/card?filter[where][userd]=a"+indice;
		return this.http.get(url_api);
	}
	saveCard(card: CardInterface){
		//const token = this.authService.getToken();
		//console.log(token);
		const url_api='https://db.andesproadventures.com:3003/api/card';
		return this.http
		.post<CardInterface>(url_api, card)
		.pipe(map(data => data));
	}
	saveBook(book: BookInterface){
		const url_api='https://db.andesproadventures.com:3003/api/books';
		return this.http
		.post<BookInterface>(url_api, book)
		.pipe(map(data => data));
	}
	saveValidation(validation: ValidationInterface){
		const url_api='https://db.andesproadventures.com:3003/api/validations';
		return this.http
		.post<ValidationInterface>(url_api, validation)
		.pipe(map(data => data));
	}
	senMail(book){
		const url_api='https://db.andesproadventures.com:3005/newBookAppToUser';
		return this.http
		.post(url_api, book)
		.pipe(map(data => data));
	}
	senMail06(book){
		const url_api='https://db.andesproadventures.com:3005/newBookAppToAdmin';
		return this.http
		.post(url_api, book)
		.pipe(map(data => data));
	}
	senMail07(validation){
		const url_api='https://db.andesproadventures.com:3005/newValidationAppToUser';
		return this.http
		.post(url_api, validation)
		.pipe(map(data => data));
	}
	senMail08(validation){
		const url_api='https://db.andesproadventures.com:3005/newValidationAppToAdmin';
		return this.http
		.post(url_api, validation)
		.pipe(map(data => data));
	}
	senMail09(book){
		const url_api='https://db.andesproadventures.com:3005/succesValidation';
		return this.http
		.post(url_api, book)
		.pipe(map(data => data));
	}
	senMail10(book){
		const url_api='https://db.andesproadventures.com:3005/newContactAppToAdmin';
		return this.http
		.post(url_api, book)
		.pipe(map(data => data));
	}


}