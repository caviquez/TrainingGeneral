import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';

//Imports for FilterPipemodule https://www.npmjs.com/package/ngx-filter-pipe
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
