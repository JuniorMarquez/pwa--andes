import { Component ,  OnInit,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TixsService } from "../../services/tixs.service";
import { ProductInfoService } from "../../services/product-info.service";
import { CarService } from "../../services/car.service";
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 

@Component({
  selector: 'app-alltixslist',
  templateUrl: './alltixslist.component.html',
  styleUrls: ['./alltixslist.component.css']
})
export class AlltixslistComponent implements OnInit {

 constructor(
    private dataApi: DataApiService
  	) { }
  public tixs:TixInterface;

 getAllTixs(){
//      this.dataApi.getAllTixs().subscribe(tixs => console.log(tixs));
        this.dataApi
        .getAllTixs()
        .subscribe((tixs: TixInterface) => (this.tixs=tixs));
    }

  ngOnInit() {
  	 this.getAllTixs();
  } 

}
