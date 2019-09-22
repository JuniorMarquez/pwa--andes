import { Component, OnInit,Inject } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { UserWService } from "../../services/user-w.service";


//declare var $: any;

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
  url2 = "assets/plugins/js/jquery.min.js";
	ngOnInit() {
  if (this._uw.loaded==true){
         this.loadAPI = new Promise(resolve => {
          console.log("resolving promise...");
          // this.loadScript2();
          this.loadScript();
          
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
//       this._uw.usersPending=false;
       }else{
  //      -- this._uw.usersPending=true;
        this.tixs=res;            
        }
     });  
    //    -- this.dataApi
    //    -- .getAllTixs()
    //    -- .subscribe((tixs: TixInterface) => (this.tixs=tixs));
    //    -- // this._uw.loaded=true;
    }
  


}
