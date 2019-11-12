import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-health',
  templateUrl: './project-health.component.html',
  styleUrls: ['./project-health.component.scss']
})
export class ProjectHealthComponent implements OnInit {

  constructor() {
  }
  // TODO: make into Enum
  svgClassDictionary = {
    'poor': 'health-poor',
    'average': 'health-average',
    'good': 'health-very-good',
    'excellent': 'health-excellent'
  };

  @Input() projectHealth: number;

  ngOnInit() {

  }

  getClassForHeart(projectHealth: number) {
    switch (true) {
      case (projectHealth > 75 && projectHealth >= 100):
        return this.svgClassDictionary['excellent'];
      case (projectHealth > 50 && projectHealth >= 75):
        return this.svgClassDictionary['good'];
      case (projectHealth > 25 && projectHealth >= 50):
        return this.svgClassDictionary['average'];
      default:
        return this.svgClassDictionary['poor'];
    }
  }

  getTextForHeart(projectHealth: number) {
    switch (true) {
      case (projectHealth > 75 && projectHealth >= 100):
        return 'Excellent';
      case (projectHealth > 50 && projectHealth >= 75):
        return 'Very Good';
      case (projectHealth > 25 && projectHealth >= 50):
        return 'Average';
      default:
        return 'Poor';
    }
  }

}
