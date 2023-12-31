import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridBarComponent } from './components/grid-bar/grid-bar.component';
import { DetallesBarComponent } from './components/detalles-bar/detalles-bar.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { DetallesPostComponent } from './components/detalles-post/detalles-post.component';
import { DetallesEventoComponent } from './components/detalles-evento/detalles-evento.component';
import { DetallesFoodComponent } from './components/detalles-food/detalles-food.component';

const routes: Routes = [
  { path: '', component: GridBarComponent },
  { path: 'bares/:barId', component: DetallesBarComponent },
  { path: 'bares/:barId/newPost', component: NewPostComponent },
  { path: 'bares/:barId/newEvent', component: NewEventComponent },
  { path: 'bares/:barId/posts/:namePost', component: DetallesPostComponent },
  { path: 'bares/:barId/eventos/:nameEvent', component: DetallesEventoComponent },
  { path: 'bares/:barId/foods/:nameFood', component: DetallesFoodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
