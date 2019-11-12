import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectModel} from '../../_models/project.model';
import {TeamModel} from '../../_models/team.model';
import {ProjectsService} from '../../_shared-services/projects.service';
import {TeamsService} from '../../_shared-services/teams.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  project: ProjectModel;
  team: TeamModel;
  selectedTab: string;
  projectTabs = ['Overview', 'Test Reports', 'Analytics'];

  constructor(
    private _projectsService: ProjectsService,
    private _teamsService: TeamsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProjectById(id);
    this.getTeamById(this.project.TeamId);
    this.selectedTab = 'Overview';

  }

  getProjectById(id: number) {
    this._projectsService.getProjectById(id).subscribe(data => {
      console.log(data, 'data');
      this.project = data;
    }, error1 => console.log(error1));
  }

  getTeamById(id: number) {
    this._teamsService.getTeamById(id).subscribe(data => {
      this.team = data;
    }, error1 => console.log(error1));
  }

}
