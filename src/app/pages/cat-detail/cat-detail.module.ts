import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatDetailPageRoutingModule } from './cat-detail-routing.module';

import { CatDetailPage } from './cat-detail.page';
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatDetailPageRoutingModule,
    SharedModule,
    RouterModule
],
  declarations: [CatDetailPage]
})
export class CatDetailPageModule {}
