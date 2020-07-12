import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ConfirmEqualValidatorDirective } from '../../confirm-equal-validator.directive';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute, Params} from '@angular/router';
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-successvalidation',
  templateUrl: './successvalidation.component.html',
  styleUrls: ['./successvalidation.component.css']
})
export class SuccessvalidationComponent implements OnInit {

	ngFormSendBook: FormGroup;
  	submitted = false;

  constructor(
   private router: Router, 
   private location: Location,
   private dataApi: DataApiService,
   private route:ActivatedRoute,
   public _uw:UserWService,
   private formBuilder: FormBuilder
    ) {}

  ngOnInit() {
  }
  

}
