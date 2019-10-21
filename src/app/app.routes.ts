import {RouterModule,Routes} from '@angular/router';
import {
	SliderHomeComponent,
	MyTixsComponent,
	LoginComponent,
	PartnersComponent,
	AffiliatesComponent,
	PartnerDetailComponent,
	AffiliateDetailComponent,
	TixDetailComponent,
	SignupComponent,
	ComingComponent,
	AlltixsComponent,
	PartnerComponent,
	AffiliateComponent,
	NewMemberComponent,
	ProfileComponent,
	AddtixsComponent,
	BookingComponent,
	AlltixslistComponent,
	AlltixsleftComponent,
	AboutComponent,
	TreksComponent,
	ContactoComponent,
	ValidationComponent,
	CheckoutComponent,
	SuccessbookComponent,
	SuccessvalidationComponent
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:SliderHomeComponent},
	{path:'alltixs',component:AlltixsComponent},
	{path:'mytixs',component:MyTixsComponent, canActivate:[AuthGuard]},
	{path:'login',component:LoginComponent},
	{path:'affiliates',component:AffiliatesComponent,canActivate:[AuthGuard]},		
	{path:'partners',component:PartnersComponent,canActivate:[AuthGuard]},
	{path:'partner-detail/:id',component:PartnerDetailComponent, canActivate:[AuthGuard]},
	{path:'affiliate-detail/:id',component:AffiliateDetailComponent, canActivate:[AuthGuard]},
	{path:'tix-detail/:id',component:TixDetailComponent},
	{path:'signup',component:SignupComponent},
	{path:'coming',component:ComingComponent},
	{path:'new-member',component:NewMemberComponent, canActivate:[AuthGuard]},
	{path:'new-member/partner',component:PartnerComponent, canActivate:[AuthGuard]},
	{path:'new-member/affiliate',component:AffiliateComponent, canActivate:[AuthGuard]},
	{path:'profile',component:ProfileComponent, canActivate:[AuthGuard]},
	{path:'addtixs',component:AddtixsComponent, canActivate:[AuthGuard]},
	{path:'booking',component:BookingComponent, canActivate:[AuthGuard]},
	{path:'alltixslist',component:AlltixslistComponent},
	{path:'alltixsleft',component:AlltixsleftComponent},
	{path:'about',component:AboutComponent},	
	{path:'treks',component:TreksComponent},
	{path:'contacto',component:ContactoComponent},
	{path:'checkout',component:CheckoutComponent},
	{path:'successbook',component:SuccessbookComponent},
	{path:'validation',component:ValidationComponent},
	{path:'successvalidation',component:SuccessvalidationComponent},		
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

