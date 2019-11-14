import { Component, OnInit } from '@angular/core';

import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 

@Component({
  selector: 'app-treklist',
  templateUrl: './treklist.component.html',
  styleUrls: ['./treklist.component.css']
})
export class TreklistComponent implements OnInit {

  constructor(
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
  }
  onPreUpdatetrek(tix: TixInterface):void{
    this.dataApi.selectedTix=Object.assign({},tix);
  } 

}
