import { Component ,  OnInit,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TixsService } from "../../services/tixs.service";
import { ProductInfoService } from "../../services/product-info.service";
import { CarService } from "../../services/car.service";
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 

@Component({
  selector: 'app-alltixs',
  templateUrl: './alltixs.component.html',
  styleUrls: ['./alltixs.component.css']
})
export class AlltixsComponent implements OnInit {

  constructor(
    private dataApi: DataApiService
  	) { }
  public tixs:TixInterface;


  ngOnInit() {
  	 // this.getAllTixs();
  } 

}
