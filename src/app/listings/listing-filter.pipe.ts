import { PipeTransform, Pipe } from '@angular/core';
import { Listing } from '../models/listing.model';

@Pipe({
    name:'listingFilter'
})
export class ListingFiterPipe implements PipeTransform {
    transform(listings: Listing[], searchTerm: string): Listing[] {
        if (!listings || !searchTerm) {
            return listings;
        }
        return listings.filter(listing =>
            listing.price.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}