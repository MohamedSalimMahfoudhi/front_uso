import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office/back-office.component';
import { BackSidebarComponent } from './back-sidebar/back-sidebar.component';
import { BackHeaderComponent } from './back-header/back-header.component';
import { BackFooterComponent } from './back-footer/back-footer.component';
import { BackBannerComponent } from './back-banner/back-banner.component';
import { BackActualitesModule } from './back-actualites/back-actualites.module';


@NgModule({
  declarations: [BackOfficeComponent, BackSidebarComponent, BackHeaderComponent, BackFooterComponent, BackBannerComponent],
  imports: [
    CommonModule,
    BackOfficeRoutingModule,
    BackActualitesModule,


  ]
})
export class BackOfficeModule { }
