import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindahomeComponent } from './components/findahome/findahome.component';
import { FindhomesearchzipcodeComponent } from './components/findhomesearchzipcode/findhomesearchzipcode.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoancalculatorComponent } from './components/loancalculator/loancalculator.component';
import { MortgageloanapplicationComponent } from './components/mortgageloanapplication/mortgageloanapplication.component';
import { PropertylistComponent } from './components/propertylist/propertylist.component';

const routes: Routes = [
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'findhome-map', component: FindahomeComponent },
  { path: 'Findhomesearchzipcode', component: FindhomesearchzipcodeComponent },
  { path: 'loancalculator', component: LoancalculatorComponent },
  { path: 'propertylist', component: PropertylistComponent },
  { path: 'mortgageloanapplication', component:MortgageloanapplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
