import { Component, OnInit ,Inject} from '@angular/core';
import {DataApiService} from '../../services/data-api.service';
import { TixInterface } from '../../models/tix-interface'; 
import { CarouselModule } from 'ngx-owl-carousel-o';

//import $ from "jquery";
//declare var $: any;
@Component({
  selector: 'app-top-tixs',
  templateUrl: './top-tixs.component.html',
  styleUrls: ['./top-tixs.component.css']
})

export class TopTixsComponent implements OnInit {

   title = 'angularowlslider';
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  constructor(private dataApi: DataApiService) { }
 public tixs:TixInterface;
 getAllTixs(){
//      this.dataApi.getAllTixs().subscribe(tixs => console.log(tixs));
        this.dataApi
        .getAllTixs()
        .subscribe((tixs: TixInterface) => (this.tixs=tixs));
    }


 	ngOnInit(): void {
     this.getAllTixs();
   		//this.filter();
  		//$.getScript('assets/js/collage.js');
		//$.getScript('assets/js/custom.js');
		//this._ps.imagesG=[];
		//this.product=[]	;	
  	}
}
