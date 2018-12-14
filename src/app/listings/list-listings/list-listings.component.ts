import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Listing } from '../../models/listing.model';
import { ListingService } from '../listing.service';

@Component({
  //selector: 'app-list-listings',
  templateUrl: './list-listings.component.html',
  styleUrls: ['./list-listings.component.css']
})
export class ListListingsComponent implements OnInit {

  listings:Listing[];
  dataFromChild: Listing;
  searchTerm: string;
  
  constructor( private _listingService :ListingService, private _router :Router) {

   }

  ngOnInit() {
    this.listings = this._listingService.getListing();
  }
   
  handleNotify(eventData: Listing){
    this.dataFromChild = eventData;
  }

  onClick(listingId : number){
   this._router.navigate(['/listings', listingId]);
  }

}
