import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private dataApi: DataApiService,
    public _uw:UserWService
  	) { }
  loadAPI = null;
  url = "assets/themekit/scripts/glide.min.js";

  ngOnInit() {
  if (this._uw.loaded==true){
         this.loadAPI = new Promise(resolve => {
          console.log("resolving promise...");
          this.loadScript();
        });
      }
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

}
