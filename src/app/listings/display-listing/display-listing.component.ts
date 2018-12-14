import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Listing } from '../../models/listing.model';

@Component({
  selector: 'app-display-listing',
  templateUrl: './display-listing.component.html',
  styleUrls: ['./display-listing.component.css']
})
export class DisplayListingComponent implements OnInit {

  @Input() listing: Listing;
  
  @Output() notify:EventEmitter<Listing> = new EventEmitter<Listing>();

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    this.notify.emit(this.listing);
  }

}
