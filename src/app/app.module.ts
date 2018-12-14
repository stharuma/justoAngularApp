import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { ListListingsComponent } from './listings/list-listings/list-listings.component';
import { DisplayListingComponent } from './listings/display-listing/display-listing.component';
import { ListingService } from './listings/listing.service';
import { ListingDetailsComponent } from './listings/listing-details/listing-details.component';
import { CreateListingsComponent } from './listings/create-listings/create-listings.component';
import { ListingFiterPipe } from './listings/listing-filter.pipe';

const appRoutes:Routes=[
  {path: 'list', component:ListListingsComponent},
  {path: 'create', component:CreateListingsComponent},
  {path: 'listings/:id', component:ListingDetailsComponent},
  {path: '', redirectTo:'/list', pathMatch:'full'}
  ]

@NgModule({
  declarations: [
    AppComponent,
    ListListingsComponent,
    DisplayListingComponent,
    ListingDetailsComponent,
    CreateListingsComponent,
    ListingFiterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
