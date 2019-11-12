import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from '../../_models/project.model';
import {ProjectsService} from '../../_shared-services/projects.service';

@Component({
  selector: 'app-deployment-statistics',
  templateUrl: './deployment-statistics.component.html',
  styleUrls: ['./deployment-statistics.component.scss']
})
export class DeploymentStatisticsComponent implements OnInit {

  DeploymentStats: ProjectModel;
  @Input() ProjectId: number;
  @Input() TeamNpsRating: string;

  constructor(private _deploymentStats: ProjectsService) {
  }

  ngOnInit() {
    this.getProjectStats(this.ProjectId);
  }

  getProjectStats(id: number) {
    this._deploymentStats.getProjectById(id).subscribe(data => {
      this.DeploymentStats = data;
    });
  }

}
