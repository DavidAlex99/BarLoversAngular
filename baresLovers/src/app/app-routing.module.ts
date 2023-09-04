import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridBarComponent } from './components/grid-bar/grid-bar.component';
import { DetallesBarComponent } from './components/detalles-bar/detalles-bar.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { DetallesPostComponent } from './components/detalles-post/detalles-post.component';
import { DetallesEventoComponent } from './components/detalles-evento/detalles-evento.component';

const routes: Routes = [
  { path: '', component: GridBarComponent },
  { path: 'bares/:barId', component: DetallesBarComponent },
  { path: '', component: NewPostComponent},
  { path: 'bares/:barId/eventos/:nameEvent', component: DetallesEventoComponent },
  { path: 'bares/:barId/posts/:namePost', component: DetallesPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
