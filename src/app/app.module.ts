import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HomeComponent,
    SearchComponent,
    MovieListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
