import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontContactRoutingModule } from './front-contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { FrontUniversiteModule } from '../front-universite/front-universite.module';
import {SafePipe}from '../../pipes/safe.pipe'

@NgModule({
  declarations: [ContactComponent,SafePipe],
  imports: [
    CommonModule,
    FrontContactRoutingModule,
    FrontUniversiteModule,
    
  ]
})
export class FrontContactModule { }
