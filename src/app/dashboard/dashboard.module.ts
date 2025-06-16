import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BaseComponent } from './base/base.component';
import { ProjectHeroComponent } from './project-hero/project-hero.component';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingComponent } from './pricing/pricing.component';
import { CtaBannerComponent } from './cta-banner/cta-banner.component';


@NgModule({
  declarations: [
    BaseComponent,
    ProjectHeroComponent,
    FeaturesComponent,
    TestimonialsComponent,
    PricingComponent,
    CtaBannerComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
