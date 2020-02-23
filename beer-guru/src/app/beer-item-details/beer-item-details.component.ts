import { Component, OnInit, Input } from '@angular/core';
import { BeerItemModel } from '../models/beer-item.model';
import { BeerService } from './../services/beer-service/beer-service.service';

@Component({
  selector: 'app-beer-item-details',
  templateUrl: './beer-item-details.component.html',
  styleUrls: ['./beer-item-details.component.scss']
})
export class BeerItemDetailsComponent implements OnInit {
  @Input() beerItemDialogData: BeerItemModel;
  public beerItemDetails: BeerItemModel;
  public similarBeers: BeerItemModel[];

  constructor(
    private beerService: BeerService,
    ) { }

  ngOnInit(): void {
    this.beerItemDetails = this.beerItemDialogData;
    this.gerSimilarBeers(this.beerItemDetails);
  }

  public gerSimilarBeers(beerItem: BeerItemModel) {
    this.beerService.getBeerList(1, 3, beerItem.abv, beerItem.ibu, beerItem.ebc).subscribe( (resp: BeerItemModel[]) => {
      this.similarBeers = resp;
    });
  }
}
