import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatDetailPage } from './cat-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CatDetailPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatDetailPageRoutingModule {}
