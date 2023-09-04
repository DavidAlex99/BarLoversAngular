import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridBarComponent } from './components/grid-bar/grid-bar.component';
import { DetallesBarComponent } from './components/detalles-bar/detalles-bar.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { VisualPostComponent } from './components/visual-post/visual-post.component';

const routes: Routes = [
  { path: '', component: GridBarComponent },
  { path: 'bares/:barId', component: DetallesBarComponent },
  { path: '', component: NewPostComponent},
  { path: 'bares/:barId/:namePost', component: VisualPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
