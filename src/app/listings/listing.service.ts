import { Injectable } from "@angular/core";
import { Listing } from "../models/listing.model";



@Injectable()
export class ListingService {
    private listLising: Listing[] = [{
        id: 1,
        price: '$525,000',
        streetNo: '34A',
        streetName: 'Angela Court',
        city: 'Markham',
        province: 'Ontario',
        country: 'Canada',
        photoPath: 'assets/images/home1.jpg'
    },
    {
        id: 2,
        price: '$625,000',
        streetNo: '349',
        streetName: 'Stone Hill Drive',
        city: 'Markham',
        province: 'Ontario',
        country: 'Canada',
        photoPath: 'assets/images/home2.jpg'
    },
    {
        id: 3,
        price: '$625,000',
        streetNo: '349',
        streetName: 'Stone Hill Drive',
        city: 'Markham',
        province: 'Ontario',
        country: 'Canada',
        photoPath: 'assets/images/home3.jpg'
    },
    {
        id:4,
        price: '$625,000',
        streetNo: '349',
        streetName: 'Stone Hill Drive',
        city: 'Markham',
        province: 'Ontario',
        country: 'Canada',
        photoPath: 'assets/images/home4.jpg'
    },
    {
        id: 5,
        price: '$725,000',
        streetNo: '3',
        streetName: 'Golden Ave',
        city: 'Markham',
        province: 'Ontario',
        country: 'Canada',
        photoPath: 'assets/images/home5.jpg'
    }];

    getListing(): Listing[] {
        return this.listLising;
    }

    getEmployeeById(id: number): Listing {
        return this.listLising.find(e => e.id === id);
    }

    save(listing: Listing) {
        this.listLising.push(listing);
    }
}