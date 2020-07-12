import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserWService } from "../../services/user-w.service";

import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-deletevalidation',
  templateUrl: './deletevalidation.component.html',
  styleUrls: ['./deletevalidation.component.css']
})
export class DeletevalidationComponent implements OnInit {

  constructor(
  		private router: Router,
    private location: Location,
    public _uw:UserWService,
  	private dataApi: DataApiService
  	) { }


 updateBook(){
  this._uw.validationToDelete.status="Borrada";
   this.dataApi.updateValidation(this._uw.validationToDelete,this._uw.validationToDelete.id).subscribe();
   this.router.navigate(['/successdeletevalidation']);
}

eliminar(){
this.updateBook();
}
  ngOnInit() {
  }

}
