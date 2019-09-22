import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface';  
import { CardInterface } from '../../models/card-interface';  
import { UserWService } from "../../services/user-w.service";
import { DataApiService } from '../../services/data-api.service';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {
partner:boolean=false;
affiliate:boolean=false;
selectorType:boolean=true;  
  constructor(public _uw:UserWService, private location: Location, private router: Router) { }
      
  ngOnInit() {
   // if (this._uw.selectorA===true){
       // location.reload();
     // }
  }

 setPartner():void{
    this.partner=false;
     this.router.navigate(['/new-member/partner']);
  }
  reset():void{
      
  }
  setAffiliate():void{
    this.affiliate=false;
    this.router.navigate(['/new-member/affiliate']);
  }

}
