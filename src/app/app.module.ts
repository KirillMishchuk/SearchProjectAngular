import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ListService } from './shared/shared';
import { StorageService } from './shared/services/storage.service';
import { ListItemComponent } from './search-page/list-item/list-item.component';
import { HoverDirective } from './shared/directives/hover.directive';
import { FormFocusDirective } from './shared/directives/form-focus.directive';
import { ListComponent } from './search-page/list/list.component';
import { ViewComponent } from './view-page/view.component';
import { SettingsComponent } from './settings-page/settings.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { FormComponent } from './search-page/form/form.component';
import { SearchComponent } from './search-page/search.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { RedTextDirective } from './shared/directives/red-text.directive';
import { MyConfirmDirective } from './shared/directives/my-confirm.directive';


@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    HoverDirective,
    FormFocusDirective,
    SafePipe,
    ListComponent,
    ViewComponent,
    SettingsComponent,
    NotFoundPageComponent,
    FormComponent,
    SearchComponent,
    SearchPipe,
    FavouriteComponent,
    RedTextDirective,
    MyConfirmDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
    // BrowserAnimationsModule
  ],
  exports: [],
  providers: [ListService, StorageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
