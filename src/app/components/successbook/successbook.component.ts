import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute, Params} from '@angular/router';
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-successbook',
  templateUrl: './successbook.component.html',
  styleUrls: ['./successbook.component.css']
})
export class SuccessbookComponent implements OnInit {

  constructor(
  	 private router: Router, 
    private location: Location,
     private dataApi: DataApiService,
   private route:ActivatedRoute,
   public _uw:UserWService,
  	) { }

  ngOnInit() {
  }

}
