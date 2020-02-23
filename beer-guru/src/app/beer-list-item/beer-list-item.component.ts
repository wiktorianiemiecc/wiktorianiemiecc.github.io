import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BeerService } from '../services/beer-service/beer-service.service';
import { Overlay } from '@angular/cdk/overlay';
import { BeerItemModel } from '../models/beer-item.model';
import { BeerItemDetailsDialogComponent } from '../beer-item-details-dialog/beer-item-details-dialog.component';

@Component({
  selector: 'app-beer-list-item',
  templateUrl: './beer-list-item.component.html',
  styleUrls: ['./beer-list-item.component.scss']
})
export class BeerListItemComponent implements OnInit {
  @Output() viewDetailsEvent = new EventEmitter();
  @Input() beerItem: BeerItemModel;
  public beerItemDetails: BeerItemModel;

  constructor(
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  public viewDetails(): void {
    this.viewDetailsEvent.emit();
  }

}
