import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search-page/search.component';
import { ViewComponent } from './view-page/view.component';
import { SettingsComponent } from './settings-page/settings.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FavouriteComponent } from './favourite/favourite.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'search'},
  {path: 'search', component: SearchComponent},
  {path: 'view', component: ViewComponent},
  {path: 'view/:id', component: ViewComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'favourite', component: FavouriteComponent},
  {path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
