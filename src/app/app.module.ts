import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BorderCardDirective } from './border-card.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
