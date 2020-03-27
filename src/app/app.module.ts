import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { WeatherDisplayComponent } from "./weather-display/weather-display.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "weatherDisplay", component: WeatherDisplayComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    WeatherDisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
