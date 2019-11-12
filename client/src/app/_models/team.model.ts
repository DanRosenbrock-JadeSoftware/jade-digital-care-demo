import {TeamMemberModel} from './team-member.model';

export interface TeamModel {
  Id: number;
  Name: string;
  Members: TeamMemberModel[];
  TeamNpsRating: number;
  ProjectId: number;
}
