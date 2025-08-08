import { Component, input } from '@angular/core';
import { ApiDay } from '../../services/weather.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { WeatherIconPipe } from "../../pipes/weather-icon.pipe";
import { HourTimePipe } from "../../pipes/hour-time.pipe";
import { DayPipe } from "../../pipes/day.pipe";

@Component({
  selector: 'app-day',
  imports: [DatePipe, WeatherIconPipe, HourTimePipe, DecimalPipe, DayPipe],
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss'
})
export class DayComponent {
  day = input.required<ApiDay>();
  expanded = false;
}
