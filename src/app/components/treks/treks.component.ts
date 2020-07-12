import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { UserWService } from "../../services/user-w.service";

declare var $: any;

@Component({
  selector: 'app-treks',
  templateUrl: './treks.component.html',
  styleUrls: ['./treks.component.css']
})
export class TreksComponent implements OnInit {

   constructor(
    private dataApi: DataApiService,
    public _uw:UserWService
    ) { }
     public tixs:TixInterface;
  loadAPI = null;
  url = "assets/themekit/scripts/glide.min.js";
  url2 = "assets/themekit/scripts/parallax.min.js";


 	ngOnInit() {
         this._uw.editingTrek=false;
  if (this._uw.loaded==true){
         this.loadAPI = new Promise(resolve => {
          console.log("resolving promise...");
          this.loadScript();
          this.loadScript2();
        });
      }
    this.getAllTixs();
    this._uw.loaded=true;
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
     public loadScript2() {
      console.log("preparing to load...");
      let node = document.createElement("script");
      node.src = this.url2;
      node.type = "text/javascript";
      node.async = true;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }

    getAllTixs(){
        this.dataApi.getAllTixs().subscribe((res:any) => {
      if (res[0] === undefined){
        console.log("no");
       }else{
        this.tixs=res;            
        }
     });  
    }

}
