import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExampleDirective } from './directives/example.directive';
import { CustomifDirective } from './directives/customif.directive';
import { CustomforDirective } from './directives/customfor.directive';
import { CustomPipe } from './pipes/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExampleDirective,
    CustomifDirective,
    CustomforDirective,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
