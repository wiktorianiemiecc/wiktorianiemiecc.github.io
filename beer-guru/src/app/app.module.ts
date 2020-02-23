import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BeerService } from './services/beer-service/beer-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerListItemComponent } from './beer-list-item/beer-list-item.component';
import { BeerItemDetailsComponent } from './beer-item-details/beer-item-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeerItemDetailsDialogComponent } from './beer-item-details-dialog/beer-item-details-dialog.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerListItemComponent,
    BeerItemDetailsComponent,
    BeerItemDetailsDialogComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule,
    InfiniteScrollModule,
  ],
  providers: [
    BeerService,
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  entryComponents: [BeerItemDetailsDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
