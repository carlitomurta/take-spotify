import { extract } from '@app/core';
import { TracksComponent } from './tracks.component';
import { Shell } from './../shell/shell.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'playlist/:id',
      component: TracksComponent,
      data: { title: extract('Lista de faixas') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class TracksRoutingModule {}
