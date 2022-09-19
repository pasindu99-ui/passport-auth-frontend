import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import {ImgDetailsComponent} from './component/img-details/img-details.component';
import { ImgDetailsViewComponent } from './component/img-details-view/img-details-view.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'imgdetails',component:ImgDetailsComponent,canActivate:[AuthGuard]},
  {path:'imgupload',component:ImgDetailsViewComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
