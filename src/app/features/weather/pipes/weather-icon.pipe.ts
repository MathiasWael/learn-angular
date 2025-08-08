import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {
  transform(value: string): string {
    const iconMap: Record<string, string> = {
      'snow': '❄️',
      'rain': '🌧️',
      'fog': '🌫️',
      'wind': '🌪️',
      'cloudy': '☁️',
      'partly-cloudy-day': '⛅',
      'partly-cloudy-night': '☁️',
      'clear-day': '☀️',
      'clear-night': '🌙'
    };

    return iconMap[value] || '🔥';
  }
}
