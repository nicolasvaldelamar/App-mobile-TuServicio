import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
    {
      path: 'home',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'informacion/:id',
      loadChildren: () => import('../informacion/informacion.module').then( m => m.InformacionPageModule)
    },
    {
      path: 'agenda',
      loadChildren: () => import('../agenda/agenda.module').then( m => m.AgendaPageModule)
    },
    {
      path: 'buscar',
      loadChildren: () => import('../buscar/buscar.module').then( m => m.BuscarPageModule)
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
