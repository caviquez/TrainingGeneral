import { Component, OnInit } from '@angular/core';
import { AgentServiceService} from './agent-service.service';
import { Observable } from 'rxjs';
import { Agent } from './agent.model'


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
    agents: Array<Agent>;
    //variable for the filter function
    agentFilter: any = {name: ''};

  constructor(private agentService: AgentServiceService) { }

  ngOnInit() {
    this.agentService.getAgents().subscribe(
      data => {
        this.setAgents(data);
      }
    )
  }

  /*The purpose of this functio if to generate an array with the compannies that come from Json*/
  setAgents(companies) {
    this.agents = companies.companies;
  }

  /*The purpose of this fuction is to detect when the 
  number of characters in the input is equial to tree, so it can start filtering
  The return value depends on the number of character if it is less than 3 it returns an ampty string
  otherwise it returns the characters thata are in te input */

  modelChanged(e)  {
    if(e.length >= 3) {
      this.agentFilter.name = String(e);
    }else{
      this.agentFilter.name = '';
    }
  }
}
