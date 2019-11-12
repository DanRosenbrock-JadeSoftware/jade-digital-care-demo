import {Component, OnInit} from '@angular/core';
import {ProjectModel} from '../../_models/project.model';
import {ProjectsService} from '../../_shared-services/projects.service';
import {TeamsService} from '../../_shared-services/teams.service';

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.scss']
})
export class ProjectsViewComponent implements OnInit {

  projects: ProjectModel[];

  constructor(private _projectsService: ProjectsService, private _teamsService: TeamsService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this._projectsService.getProjects().subscribe(data => {
      this.projects = data;
    }, error1 => console.log(error1));
  }

  getTeamNPSForProject(id: number) {
    let number = 0;
    this._teamsService.getTeamById(id).subscribe(data => {
      number = data.TeamNpsRating;
    }, error1 => console.log(error1));
    return number;
  }

  getTeamNameForProject(id: number): string {
    let teamName = 'Example';
    this._teamsService.getTeamById(id).subscribe(data => {
      console.log(data);
      teamName = data.Name;
    }, error1 => console.log(error1));
    return teamName;
  }

}
