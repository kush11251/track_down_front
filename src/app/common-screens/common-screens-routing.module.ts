import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { TermesComponent } from './termes/termes.component';
import { AboutComponent } from './about/about.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { UssageComponent } from './ussage/ussage.component';
import { CareersComponent } from './careers/careers.component';
import { BlogComponent } from './blog/blog.component';
import { PressComponent } from './press/press.component';
import { CookieComponent } from './cookie/cookie.component';
import { SecurityComponent } from './security/security.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: 'not-found', component: NotFoundComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermesComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'cookie', component: CookieComponent },
  { path: 'about', component: AboutComponent },
  { path: 'press', component: PressComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'ussage', component: UssageComponent },
  { path: 'documentation', component: DocumentationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonScreensRoutingModule { }
