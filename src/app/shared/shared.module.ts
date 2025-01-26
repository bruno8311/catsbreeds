import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { CardDescriptionComponent } from './components/card-description/card-description.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchBoxComponent,
    HeaderComponent,
    CardDescriptionComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    SearchBoxComponent,
    HeaderComponent,
    CardDescriptionComponent
  ]
})
export class SharedModule { }
