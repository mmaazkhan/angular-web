import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppDemoComponent } from './src/app/demo/demo.component';  // Ensure the path is correct

@NgModule({
  declarations: [
    AppComponent,
    AppDemoComponent  // Declare the component here
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
