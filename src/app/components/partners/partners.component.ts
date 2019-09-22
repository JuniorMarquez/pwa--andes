import { Component, OnInit ,Inject} from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { CardInterface } from '../../models/card-interface'; 

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor(
  	private dataApi: DataApiService
  	) { }


	public cards:CardInterface;
 getActive(){
        this.dataApi
        .getActivePartners()
        .subscribe((cards: CardInterface) => (this.cards=cards));
    }
 getPending(){
        this.dataApi
        .getPendingPartners()
        .subscribe((cards: CardInterface) => (this.cards=cards));
    }


 	ngOnInit(): void {
     this.getActive();
   		
  	}

}
