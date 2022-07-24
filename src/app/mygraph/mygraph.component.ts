import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Edge, Node, Layout } from '@swimlane/ngx-graph';

import * as shape from 'd3-shape';
import { Subject } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-mygraph',
  templateUrl: './mygraph.component.html',
  styleUrls: ['./mygraph.component.scss']
})
export class MygraphComponent implements OnInit {
  // hierarchialGraph = { nodes: [], links: [] };
  // curve = shape.curveBundle.beta(1);
  milestoneBackground = '#40476D';
  milestoneText = '#cccccc';
  nodeBackground = '#AD5D4E';
  nodeText = '#ffffff';
  lineColor = '#333333';

  linkPointDef = '1 50, 100 100, 200 50, 100 1';
  textDominantBaseline = 'middle';
  textAnchor = 'middle';
  textStartOffset = '50%';
  @ViewChild('node1') node1: ElementRef;
  curve: any = shape.curveLinear;
  layout = 'dagreCluster';
  draggingEnabled = false;
  panningEnabled = true;
  zoomEnabled = true;

  zoomSpeed = 0.1;
  minZoomLevel = 0.2;
  maxZoomLevel = 4.0;
  panOnZoom = true;

  autoZoom = false;
  autoCenter = true;

  update$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();
  panToNode$: Subject<string> = new Subject<string>();

  nodes: Node[];
  links: Edge[];

  layoutSettings = {
    orientation: 'LR',
    marginX: 0,
    marginY: 200,
    edgePadding: 100,
    rankPadding: 150,
    // nodePadding: 5,
    // multigraph: true,
    // compound: true,
    // align: 'UL'
  };
  // show = JSON.stringify(Node[1].info)

  constructor(private elementRef: ElementRef,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.nodes = this.dataService.nodes;
    this.links = this.dataService.links;

  }

  public getStyles(node: Node): any {
    return {
      'background-color': "red",
    };
  }

  Hover(arr: any):string {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr.length > 1) str += '\nOccurance ' + (i + 1).toString() + '\n';
      str += '\nuser email: ' + (arr[i].user_email) + '\n';
      str += 'timestamp: ' + arr[i].time_stamp + '\n';
    }
    return str;
  }


  // onChangeGraph() {
  //   this.nodes[0].label = 'Dragon';
  //   this.nodes[1].label = 'Cat';
  //   this.nodes[2].label = 'Dog';
  //   this.nodes[3].label = 'Bunny';
  //   this.nodes[4].label = 'Horse';
  //   this.nodes[5].label = 'Goat';
  //   this.nodes = [...this.nodes];
  // }

  onNodeClick($event: { label: string; }) {
    console.log('Im node ' + $event.label + 'and I was clicked!');

  }

  onLineClick($event: { source: string; target: string; }) {
    console.log('I am a line between ' + $event.source + ' and ' + $event.target + ' and I was clicked!');
  }

}
