import { Component, inject, model } from '@angular/core';
import { ApiDay, WeatherService } from '../services/weather.service';
import { DayComponent } from '../components/day/day.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  imports: [DayComponent, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  weatherService = inject(WeatherService);

  location = model<string>('Aalborg');
  searching = false;
  days: ApiDay[] = [];

  search() {
    console.log("Searching for weather in:", this.location());
    
    this.searching = true;
    this.days = [];
    this.weatherService.getDays(this.location()).subscribe(days => {
      this.days = days;
      this.searching = false;
    });
  }
}
