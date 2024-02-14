import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { ProfilPage } from '../profil/profil.page';

const routes: Routes = [
  {
    path: 'tabs/tab1',
    component: Tab1Page 
  },
  {
    path: '',
    component: Tab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}

