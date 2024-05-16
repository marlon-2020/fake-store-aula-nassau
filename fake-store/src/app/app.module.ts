import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MuitaletraPipe } from './pipes/muitaletra.pipe';
import { FonteDirective } from './diretivas/fonte.directive';

@NgModule({
  declarations: [
    AppComponent,
    MuitaletraPipe,
    FonteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
