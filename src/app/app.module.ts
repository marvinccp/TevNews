import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { DeportesComponent } from './pages/deportes/deportes.component';
import { PoliticaComponent } from './pages/politica/politica.component';
import { TecnologiaComponent } from './pages/tecnologia/tecnologia.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommentFormComponent } from './components/comments/comment-form/comment-form.component';
import { CommentsListComponent } from './components/comments/comments-list/comments-list.component';
import { CommentsItemComponent } from './components/comments/comments-item/comments-item.component';
import { CommentsComponent } from './components/comments/comments/comments.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TopHeaderComponent,
    DeportesComponent,
    PoliticaComponent,
    TecnologiaComponent,
    FooterComponent,
    CommentFormComponent,
    CommentsListComponent,
    CommentsItemComponent,
    CommentsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
