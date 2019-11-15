import { Component, OnInit } from '@angular/core';

import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { BookInterface } from '../../models/book-interface'; 

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(
  	private dataApi: DataApiService
  	) { }

  public books:BookInterface;

  public books2:BookInterface;
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
