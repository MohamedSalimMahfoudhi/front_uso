import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackActualitesRoutingModule } from './back-actualites-routing.module';
import { BackListeActualiteComponent } from './back-liste-actualite/back-liste-actualite.component';
import { BackAddActualiteComponent } from './back-add-actualite/back-add-actualite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontUniversiteModule } from 'src/app/universite/front-universite/front-universite.module';


@NgModule({
  declarations: [BackListeActualiteComponent, BackAddActualiteComponent],
  imports: [
    CommonModule,
    BackActualitesRoutingModule,
    ReactiveFormsModule,
    FrontUniversiteModule

  ]
})
export class BackActualitesModule { }
