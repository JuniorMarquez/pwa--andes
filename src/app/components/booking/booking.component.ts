import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { BookInterface } from '../../models/book-interface'; 
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
  	private dataApi: DataApiService,
      public _uw:UserWService
  	) { }

  public books:BookInterface;
   public book:BookInterface;

  public books2:BookInterface;

 cancelar(book: BookInterface){
     this._uw.bookToCancel=book;
      this.router.navigate(['/cancelbook'])
 }

 getBookPending(){
        this.dataApi
        .getBookPending()
        .subscribe((books: BookInterface) => (this.books=books));
    }
    getBookConf(){
        this.dataApi
        .getBookConf()
        .subscribe((books2: BookInterface) => (this.books2=books2));
    }

  ngOnInit() {
  	 this.getBookPending();
      this.getBookConf();
  }

}
