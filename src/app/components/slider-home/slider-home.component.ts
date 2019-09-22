import { Component, OnInit,Inject } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { UserWService } from "../../services/user-w.service";


declare var $: any;

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css']
})
export class SliderHomeComponent implements OnInit {

  constructor(
    private dataApi: DataApiService,
    public _uw:UserWService
    ) { }
  private tixs:TixInterface;
  loadAPI = null;
  url = "assets/themekit/scripts/glide.min.js";
	ngOnInit() {
  if (this._uw.loaded==true){
         this.loadAPI = new Promise(resolve => {
          console.log("resolving promise...");
          this.loadScript();
        });
      }
    this.getAllTixs();

  }

  public loadScript() {
      console.log("preparing to load...");
      let node = document.createElement("script");
      node.src = this.url;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }

    getAllTixs(){
        this.dataApi
        .getAllTixs()
        .subscribe((tixs: TixInterface) => (this.tixs=tixs));this._uw.loaded=true;
    }


}
