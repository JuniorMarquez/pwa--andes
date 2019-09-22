import { Component, OnInit } from '@angular/core';


declare var $: any;
@Component({
  selector: 'app-coming',
  templateUrl: './coming.component.html',
  styleUrls: ['./coming.component.css']
})
export class ComingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('.countdown').downCount({
				date: '09/12/2019 12:00:00',
				offset: +10
			}, function () {
				alert('WOOT WOOT, done!');
			});
  }


}