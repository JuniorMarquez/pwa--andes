import { Component, OnInit } from '@angular/core';
import { ScrollTopService }  from '../../services/scroll-top.service';
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { UserWService } from "../../services/user-w.service";


import { ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-tix-detail',
  templateUrl: './tix-detail.component.html',
  styleUrls: ['./tix-detail.component.css']
})
export class TixDetailComponent implements OnInit {

  constructor(public scrollTopService:ScrollTopService,
   private dataApi: DataApiService,
   private route:ActivatedRoute,
   public _uw:UserWService
   ) { }
  loadAPI = null;
  url = "assets/themekit/scripts/glide.min.js"

public tix:TixInterface= {
	category:'',
	description:'',
	productName:'',
	notes:'',
	images: ['', '']
};


   public loadScript() {
      console.log("preparing to load...");
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }

  ngOnInit() {
  if (this._uw.loaded==true){
         this.loadAPI = new Promise(resolve => {
          console.log("resolving promise...");
          this.loadScript();
        });
      }
    this._uw.loaded=true;

   this.scrollTopService.setScrollTop();
//  	const tix_id: string=this.route.snapshot.paramMap.get('id');
  	this.getDetails(this.route.snapshot.paramMap.get('id'));

  }
getDetails(id: string){
	this.dataApi.getTixById(id).subscribe(tix => (this.tix = tix));
}
}
