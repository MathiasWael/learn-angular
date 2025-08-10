import { Component, DestroyRef, inject, model, OnInit } from '@angular/core';
import { WeatherApiResponse, WeatherService } from '../services/weather.service';
import { DayComponent } from '../components/day/day.component';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-weather',
  imports: [DayComponent, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  private weatherService = inject(WeatherService);
  private destroyRef = inject(DestroyRef);

  location = model<string>('Aalborg');
  searching = false;
  weather: WeatherApiResponse | null = null;
  error: string | null = null;

  ngOnInit() {
    this.search();
  }

  search() {
    const currentLocation = this.location()?.trim();

    if (!currentLocation) {
      this.error = 'Please enter a location';
      return;
    }

    this.searching = true;
    this.weather = null;
    this.error = null;

    this.weatherService.getWeather(currentLocation)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.searching = false;
        })
      )
      .subscribe({
        next: (weather) => {
          console.log('Weather data:', weather);
          this.weather = weather;
          this.error = null;
        },
        error: (error) => {
          console.error('Error fetching weather data:', error);
          this.error = 'Failed to fetch weather data. Please try again.';
        }
      });
  }
}
