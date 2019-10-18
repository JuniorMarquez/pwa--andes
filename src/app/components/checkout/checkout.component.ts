import { Component, OnInit } from '@angular/core';
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(
  	public _uw:UserWService,
	private dataApi: DataApiService,
  	) { }
  	public sendBook(){
  		return this.dataApi.saveBook(this._uw.book)
        .subscribe(
     );     
  	}
  ngOnInit() {
  	this.sendBook();
  }

}
