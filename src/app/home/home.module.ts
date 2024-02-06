// home.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CandlestickComponent } from '../candlestick/candlestick.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts/highstock'; // Ensure this import is added
import HighchartsAngular from 'highcharts-angular'; // Ensure this import is added

@NgModule({
  declarations: [
HomeComponent,],
  imports: [
    CommonModule,
    ChartModule,
    HighchartsChartModule
    // Add other modules if any
  ],
  bootstrap:[HomeComponent]

})
export class HomeModule { }

