import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
//import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef, private router: Router) {}
  
  
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  nav(){
    this.router.navigate(['/candle']);

  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = (this.elementRef.nativeElement as HTMLElement).querySelector('#myChart') as HTMLCanvasElement;
    Chart.register(...registerables);
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            type: 'linear',
            beginAtZero: true,
          },
        },
      },
    });
  }
}