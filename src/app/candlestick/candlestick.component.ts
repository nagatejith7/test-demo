import { Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts/highstock'; // Ensure Highstock for candle charts
import HighchartsAngular from 'highcharts-angular';


@Component({
  selector: 'app-candlestick',
  standalone: true,
  imports: [],
  templateUrl: './candlestick.component.html',
  styleUrl: './candlestick.component.css'
})
export class CandlestickComponent implements OnInit {

  chartData = [
    [1654264800000, 100, 110, 95, 105],
    // ... more data points
  ];

  chartOptions = {
    chart: {
      type: 'candlestick'
    },
    title: {
      text: 'Your Chart Title' // Replace with your desired title
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: 'Price'
      }
    },
    series: [{
      name: 'Price',
      data: this.chartData
    }]
  };

  ngOnInit(): void {
    // Perform any additional setup actions here, if needed
  }
}