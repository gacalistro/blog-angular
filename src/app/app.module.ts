import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { PrimarySectionComponent } from "./components/primary-section/primary-section.component";
import { SecondarySectionComponent } from "./components/secondary-section/secondary-section.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    PrimarySectionComponent,
    SecondarySectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
