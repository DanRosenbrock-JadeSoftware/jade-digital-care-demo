import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {TeamMemberModel} from '../_models/team-member.model';
import {TeamModel} from '../_models/team.model';

@Injectable({
  providedIn: 'root'
})

export class TeamsService {

  Yakuza: TeamMemberModel[] = [
    {
      Id: 1,
      Name: 'Erin',
      ImageUrl: '../assets/jade-staff/p1.png'
    },
    {
      Id: 2,
      Name: 'Dave',
      ImageUrl: '../assets/jade-staff/p2.png'
    },
    {
      Id: 3,
      Name: 'Doug',
      ImageUrl: '../assets/jade-staff/p3.png'
    },
    {
      Id: 4,
      Name: 'Tash',
      ImageUrl: '../assets/jade-staff/p4.png'
    }
  ];

  SpgTeam: TeamMemberModel[] = [
    {
      Id: 1,
      Name: 'Kate',
      ImageUrl: '../assets/jade-staff/p1.png'
    },
    {
      Id: 2,
      Name: 'Hayden',
      ImageUrl: '../assets/jade-staff/p2.png'
    },
    {
      Id: 3,
      Name: 'Susan',
      ImageUrl: '../assets/jade-staff/p4.png'
    }
  ];

  Team: TeamModel[] = [
    {
      Id: 1,
      Name: 'Yakuza',
      Members: this.Yakuza,
      TeamNpsRating: 6,
      ProjectId: 0
    },
    {
      Id: 2,
      Name: 'SPG',
      Members: this.SpgTeam,
      TeamNpsRating: 6,
      ProjectId: 1
    }
  ];

  constructor() {
  }

  getTeams(): Observable<TeamModel[]> {
    return of<TeamModel[]>(this.Team);
  }

  // TODO: change when API call
  getTeamById(id: number): Observable<TeamModel> {
    return of<TeamModel>(this.Team.find(aTeam => aTeam.Id === id));
  }

}
