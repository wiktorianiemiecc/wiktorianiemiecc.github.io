import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BeerItemModel } from '../models/beer-item.model';

@Component({
  selector: 'app-beer-item-details-dialog',
  templateUrl: './beer-item-details-dialog.component.html',
  styleUrls: ['./beer-item-details-dialog.component.scss']
})
export class BeerItemDetailsDialogComponent implements OnInit {
  public beerItemDetails: BeerItemModel;

  constructor(
    public dialogRef: MatDialogRef<BeerItemDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {beerItem: BeerItemModel[]},
    ) { }

  ngOnInit(): void {
    this.beerItemDetails = this.data.beerItem[0];
  }

}
