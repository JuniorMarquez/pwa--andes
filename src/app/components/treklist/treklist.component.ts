import { Component, OnInit } from '@angular/core';

import { UserWService } from "../../services/user-w.service";
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 

import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-treklist',
  templateUrl: './treklist.component.html',
  styleUrls: ['./treklist.component.css']
})
export class TreklistComponent implements OnInit {

  constructor(
    private router: Router, 
    public _uw:UserWService,
    private location: Location,
  	private dataApi: DataApiService
  	) { }
 public tixs:TixInterface;
getTixsPending(){
        this.dataApi
        .getAllTixs()
        .subscribe((tixs: TixInterface) => (this.tixs=tixs));
    }
    
  ngOnInit() {
  	this.getTixsPending();
    this._uw.editingTrek=false;
  }
  editTrek(tix: TixInterface){
    this._uw.editingTrek=true;
    this.router.navigate(['/tix-detail/',tix.id]);

  }
  onPreUpdatetrek(tix: TixInterface):void{
    this.dataApi.selectedTix=Object.assign({},tix);
  } 

}
