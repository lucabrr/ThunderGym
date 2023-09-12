import { Component, OnInit } from '@angular/core';
import { AuthorizzationService } from 'src/app/services/authorizzation.service';
import { DashBoardService } from 'src/app/services/dashBoard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

constructor(private authSvc:AuthorizzationService, private dashSvc:DashBoardService){}
  ngOnInit(): void {
   this.dashSvc.test().subscribe(res => console.log(res)
   )
  }

}
