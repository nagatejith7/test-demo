import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CandlestickComponent } from './candlestick.component';
import { HighchartsChartModule } from 'highcharts-angular'; // Import here

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HighchartsChartModule // Add to imports
  ],
  providers: [],
  bootstrap: []
})
export class CandlestickModule {}
