import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graph-dona',
  templateUrl: './graph-dona.component.html',
  styles: []
})
export class GraphDonaComponent implements OnInit {

  @Input('label') public doughnutChartLabels: string[] = [];
  @Input('data') public doughnutChartData: number[] = [];
  @Input('type') public doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
    console.log(this.doughnutChartLabels);
    console.log(this.doughnutChartData);
    console.log(this.doughnutChartType);
  }

}
