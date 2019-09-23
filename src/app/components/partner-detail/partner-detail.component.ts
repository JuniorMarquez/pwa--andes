import { Component, OnInit } from '@angular/core';
import { ScrollTopService }  from '../../services/scroll-top.service';
import {DataApiService} from '../../services/data-api.service';
import { CardInterface } from '../../models/card-interface'; 
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-partner-detail',
  templateUrl: './partner-detail.component.html',
  styleUrls: ['./partner-detail.component.css']
})
export class PartnerDetailComponent implements OnInit {

  constructor(public scrollTopService:ScrollTopService, private dataApi: DataApiService,private route:ActivatedRoute) { }
	public card:CardInterface= {
		id:'',
		userd:'',
		phone:'',
		companyName:'',
		address:'',
		status:'',
		name:''
	};

	  ngOnInit() {
 this.scrollTopService.setScrollTop();
	// 	const card_id: string=this.route.snapshot.paramMap.get('id');
	  	this.getDetails(this.route.snapshot.paramMap.get('id'));

	  }
	getDetails(id: string){
		this.dataApi.getCardById(id).subscribe(card => (this.card = card));
	}

}



