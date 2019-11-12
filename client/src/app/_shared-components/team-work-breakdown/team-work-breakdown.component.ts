import {Component, Input, OnInit} from '@angular/core';
import {TeamWorkBreakDownModel} from '../../_models/team-work-breakdown.model';

@Component({
  selector: 'app-team-work-breakdown',
  templateUrl: './team-work-breakdown.component.html',
  styleUrls: ['./team-work-breakdown.component.scss']
})
export class TeamWorkBreakdownComponent implements OnInit {

  @Input() TeamWorkBreakdown: TeamWorkBreakDownModel;
  @Input() ProjectId: number;

  constructor() {

  }

  ngOnInit() {

  }



}
