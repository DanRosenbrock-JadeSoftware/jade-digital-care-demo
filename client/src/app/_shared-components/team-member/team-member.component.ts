import {Component, Input} from '@angular/core';
import {TeamMemberModel} from '../../_models/team-member.model';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent {

  @Input() Teams: TeamMemberModel[];
  @Input() displayName: boolean;
  @Input() imgClass: string;

  constructor() {
  }
}
