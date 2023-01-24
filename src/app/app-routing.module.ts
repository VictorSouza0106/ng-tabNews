import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from './guards/is-auth.guard';
import { ArticleViewComponent } from './pages/article-view/article-view.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RecentsComponent } from './pages/recents/recents.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'article/:id',
    component: ArticleViewComponent,
  },
  {
    path: 'recents',
    component: RecentsComponent,
    canActivate: [IsAuthGuard],
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
