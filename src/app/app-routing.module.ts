import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

const routes: Routes = [
  {path: 'imprint', component: ImprintComponent},
  {path: 'dataprot', component: DataProtectionComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
