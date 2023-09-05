import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { GridBarComponent } from './components/grid-bar/grid-bar.component';
import { GridPostComponent } from './components/grid-post/grid-post.component';
import { GridEventComponent } from './components/grid-event/grid-event.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DetallesBarComponent } from './components/detalles-bar/detalles-bar.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { NewEventComponent } from './pages/new-event/new-event.component';
import { CuerpoNewPostComponent } from './components/cuerpo-new-post/cuerpo-new-post.component';
import { VisualBarComponent } from './components/visual-bar/visual-bar.component';
import { NewsComponent } from './components/news/news.component';
import { VisualFoodComponent } from './components/visual-food/visual-food.component';
import { VisualEventoComponent } from './components/visual-evento/visual-evento.component';
import { VisualPostComponent } from './components/visual-post/visual-post.component';
import { DetallesFoodComponent } from './components/detalles-food/detalles-food.component';
import { DetallesEventoComponent } from './components/detalles-evento/detalles-evento.component';
import { DetallesPostComponent } from './components/detalles-post/detalles-post.component';
import { CuerpoNewEventComponent } from './components/cuerpo-new-event/cuerpo-new-event.component';

@NgModule({
  declarations: [
    AppComponent,
    GridBarComponent,
    GridPostComponent,
    GridEventComponent,
    NavBarComponent,
    DetallesBarComponent,
    NewPostComponent,
    CuerpoNewPostComponent,
    CuerpoNewEventComponent,
    VisualBarComponent,
    NewsComponent,
    VisualFoodComponent,
    VisualEventoComponent,
    VisualPostComponent,
    DetallesFoodComponent,
    DetallesEventoComponent,
    DetallesPostComponent,
    NewEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  //Registro de módulo importado
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
