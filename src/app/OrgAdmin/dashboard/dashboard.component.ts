import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../services/organization.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public shuttleDriverDetails;

  constructor(private DashboardService: OrganizationService) { }

  ngOnInit() {
    this.DashboardService.getShuttlebooking().subscribe(res => {
      console.log('return from drivershuttle', res);
      this.shuttleDriverDetails = res;
    });



  }

}
