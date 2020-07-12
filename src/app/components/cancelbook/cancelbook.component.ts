import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserWService } from "../../services/user-w.service";

import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-cancelbook',
  templateUrl: './cancelbook.component.html',
  styleUrls: ['./cancelbook.component.css']
})
export class CancelbookComponent implements OnInit {

  constructor(
  	private router: Router,
    private location: Location,
    public _uw:UserWService,
  	private dataApi: DataApiService
  	) { }
 updateBook(){
  this._uw.bookToCancel.status="Cancelada";
   this.dataApi.updateBook(this._uw.bookToCancel,this._uw.bookToCancel.id).subscribe();
   this.router.navigate(['/successcancelbook']);
}
cencelar(){
this.updateBook();
}
  ngOnInit() {
  }

}
