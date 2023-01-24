import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RecentsComponent } from './pages/recents/recents.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleViewComponent } from './pages/article-view/article-view.component';
import { TimeDiffPipe } from './pipes/time-diff.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecentsComponent,
    FavoritesComponent,
    UnauthorizedComponent,
    NotFoundComponent,
    NavbarComponent,
    ArticleListComponent,
    ArticleViewComponent,
    TimeDiffPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
