import { Component, OnInit } from '@angular/core';
import { AgentServiceService} from './agent-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
    agents$: Object;
    //variable for the filter function
    agentFilter: any = {name: ''};

  constructor(private agent_service: AgentServiceService) { }

  ngOnInit() {
    this.agent_service.getAgents().subscribe(
      data => this.agents$ = data
    )
  }

}
