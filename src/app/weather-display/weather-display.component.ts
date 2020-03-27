import { weatherDisplayService } from "./weather-display.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-weather-display",
  templateUrl: "./weather-display.component.html",
  styleUrls: ["./weather-display.component.css"]
})
export class WeatherDisplayComponent implements OnInit {
  test;
  service = new weatherDisplayService();
  constructor() {
    this.test = this.service.test();
  }

  ngOnInit(): void {}
}
