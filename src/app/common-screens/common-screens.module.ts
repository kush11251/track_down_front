import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonScreensRoutingModule } from './common-screens-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    CommonScreensRoutingModule
  ]
})
export class CommonScreensModule { }
