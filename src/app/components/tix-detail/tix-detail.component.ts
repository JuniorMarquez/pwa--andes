import { Component, OnInit } from '@angular/core';
import { ScrollTopService }  from '../../services/scroll-top.service';
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-tix-detail',
  templateUrl: './tix-detail.component.html',
  styleUrls: ['./tix-detail.component.css']
})
export class TixDetailComponent implements OnInit {

  constructor(public scrollTopService:ScrollTopService, private dataApi: DataApiService,private route:ActivatedRoute) { }
public tix:TixInterface= {
	category:'',
	description:'',
	productName:'',
	notes:'',
	images: ['', '']
};
  ngOnInit() {
   this.scrollTopService.setScrollTop();
//  	const tix_id: string=this.route.snapshot.paramMap.get('id');
  	this.getDetails(this.route.snapshot.paramMap.get('id'));

  }
getDetails(id: string){
	this.dataApi.getTixById(id).subscribe(tix => (this.tix = tix));
}
}
