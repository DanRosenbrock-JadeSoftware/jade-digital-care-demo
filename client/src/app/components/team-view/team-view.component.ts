import {Component, OnInit} from '@angular/core';
import {TeamWorkBreakDownModel} from '../../_models/team-work-breakdown.model';
import {TeamModel} from '../../_models/team.model';
import {TeamWorkBreakdownService} from '../../_shared-services/team-work-breakdown.service';
import {TeamsService} from '../../_shared-services/teams.service';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent implements OnInit {

  Teams: TeamModel[];
  TeamWorkBreakdown: TeamWorkBreakDownModel[];

  constructor(private _teamService: TeamsService, private _workBreakdownService: TeamWorkBreakdownService) {
  }

  ngOnInit() {
    this.getTeams();
    this.getTeamWorkBreakdown();
  }

  getTeams() {
    this._teamService.getTeams().subscribe(data => {
      this.Teams = data;
    }, error1 => console.log(error1));
  }

  getTeamWorkBreakdown() {
    this._workBreakdownService.getTeamWorkBreakdown().subscribe(data => {
      this.TeamWorkBreakdown = data;
    }, error1 => console.log(error1));
  }



}



