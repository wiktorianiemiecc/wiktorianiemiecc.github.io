import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { Location } from '@angular/common';
import { finalize } from 'rxjs/operators';

import { BeerService } from './../services/beer-service/beer-service.service';
import { BeerItemModel } from './../models/beer-item.model';
import { BeerItemDetailsDialogComponent } from '../beer-item-details-dialog/beer-item-details-dialog.component';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  public beerList: BeerItemModel[] = [];
  public beerItemDetails: BeerItemModel;
  public pageCounter = 1;
  public perPage = 20;
  public scrollThreshold = 0;
  public loading: boolean;

  constructor(
    private beerService: BeerService,
    private route: ActivatedRoute,
    private overlay: Overlay,
    public dialog: MatDialog,
    public loaderDialog: MatDialog,
    private location: Location,
    ) {}

  ngOnInit(): void {
    const id: ActivatedRouteSnapshot = this.route.snapshot;
    if (!!id.params.id && id.routeConfig.path === 'details/:id') {
      console.log(id);
      const beerId = id.params.id;
      this.viewDetails(beerId);
    }
    this.getBeerList();
  }

  public getBeerList(): void {
    this.loading = true;
    this.beerService.getBeerList(this.pageCounter, this.perPage).pipe(
      finalize(() => {
        this.loading = false;
      })
  ).subscribe((resp: BeerItemModel[]) => {
    resp.forEach( (item: BeerItemModel) => {
      this.beerList.push(item);
    });
    this.pageCounter++;
    });
  }

  public viewDetails(id: number): void {
    this.location.replaceState(`/details/${id}`);
    this.openDialog(id);
  }

  public openDialog(id: number): void {
    this.loaderDialog.open( LoaderComponent);
    this.beerService.getBeerItem(id).subscribe( (resp: BeerItemModel) => {
      this.loaderDialog.closeAll();
      this.beerItemDetails = resp;
      const dialogRef = this.dialog.open(BeerItemDetailsDialogComponent, {
        scrollStrategy: this.overlay.scrollStrategies.noop(),
        data: {beerItem: this.beerItemDetails}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.location.replaceState('');
      });
    });
  }

  public onScroll(): void {
    this.getBeerList();
  }

}
