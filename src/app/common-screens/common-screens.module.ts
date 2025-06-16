import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonScreensRoutingModule } from './common-screens-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotFoundComponent,
    FeaturesComponent,
    PricingComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    CommonScreensRoutingModule,
    FormsModule
  ]
})
export class CommonScreensModule { }
