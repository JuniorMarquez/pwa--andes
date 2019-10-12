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
 getBookPending(){
        this.dataApi
        .getBookPending()
        .subscribe((books: BookInterface) => (this.books=books));
    }

  ngOnInit() {
  	 this.getBookPending();
  }

}
