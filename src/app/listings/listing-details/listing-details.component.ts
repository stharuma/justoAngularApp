import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../listing.service';
import { Listing } from '../../models/listing.model';
@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})

export class ListingDetailsComponent implements OnInit {

  private _id : number;
  listing: Listing;
 
  constructor(private _route: ActivatedRoute, 
    private _listingService: ListingService,
    private _router: Router) { }

  ngOnInit() {
   
    this._route.paramMap.subscribe(params =>{
      this._id = +params.get('id');
      this.listing = this._listingService.getEmployeeById(this._id);
    });
    this.listing = this._listingService.getEmployeeById(this._id);
  }
  viewNextListing(){
    if(this._id<3){
      this._id =this._id + 1;
    }else{
      this._id = 1;
    }
  
  this._router.navigate(['/listings', this._id]);
  }
}
