import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';
import { Listing } from '../../models/listing.model';

@Component({
  selector: 'app-create-listings',
  templateUrl: './create-listings.component.html',
  styleUrls: ['./create-listings.component.css']
})
export class CreateListingsComponent implements OnInit {

  previewPhoto=false;
  listing:Listing ={
    id: null,
    price: null,
    streetNo: null,
    streetName: null,
    city: null,
    province: null,
    country: null,
    photoPath: null

  }
    
  
  constructor(private _listingService :ListingService, private _router :Router) {
   
   }

  ngOnInit() {
  }

  togglePhotoPreview(){
    this.previewPhoto=!this.previewPhoto;
  }
  saveListing():void{
   this._listingService.save(this.listing);
   this._router.navigate(['list']);
  }

}
