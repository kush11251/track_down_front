import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonScreensRoutingModule } from './common-screens-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermesComponent } from './termes/termes.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SecurityComponent } from './security/security.component';
import { CookieComponent } from './cookie/cookie.component';
import { PressComponent } from './press/press.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { UssageComponent } from './ussage/ussage.component';
import { DocumentationComponent } from './documentation/documentation.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    FeaturesComponent,
    PricingComponent,
    ContactComponent,
    TermesComponent,
    PrivacyComponent,
    SecurityComponent,
    AboutComponent,
    PressComponent,
    BlogComponent,
    CareersComponent,
    UssageComponent,
    DocumentationComponent
  ],
  imports: [
    CommonModule,
    CommonScreensRoutingModule,
    FormsModule
  ]
})
export class CommonScreensModule { }
