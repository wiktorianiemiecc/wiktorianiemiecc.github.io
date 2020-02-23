import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerItemDetailsDialogComponent } from './beer-item-details-dialog/beer-item-details-dialog.component';
import { BeerItemDetailsComponent } from './beer-item-details/beer-item-details.component';


const routes: Routes = [
  {
    path: '',
    component: BeerListComponent,
  },
  {
    path: 'details/:id',
    component: BeerListComponent
  },
  { path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
