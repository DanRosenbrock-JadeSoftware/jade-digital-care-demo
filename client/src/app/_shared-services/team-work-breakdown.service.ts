import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TeamWorkBreakDownModel} from '../_models/team-work-breakdown.model';

@Injectable({
  providedIn: 'root'
})
export class TeamWorkBreakdownService {

  TeamWorkBreakdown: TeamWorkBreakDownModel[] = [
    {
      NewFeatures: 34,
      TechnicalDebits: 49,
      Rework: 12,
      Bugs: 5
    },
    {
      NewFeatures: 64,
      TechnicalDebits: 20,
      Rework: 6,
      Bugs: 10
    }
  ];

  constructor() {
  }

  getTeamWorkBreakdown(): Observable<TeamWorkBreakDownModel[]> {
    return of<TeamWorkBreakDownModel[]>(this.TeamWorkBreakdown);
  }
}
