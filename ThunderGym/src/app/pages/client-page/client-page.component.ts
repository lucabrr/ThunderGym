import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizzationService } from 'src/app/services/authorizzation.service';
import { DashBoardService } from 'src/app/services/dashBoard.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent {
  constructor(private authSvc:AuthorizzationService, private dashSvc:DashBoardService, private router:Router){}

  iscriviCliente(form:NgForm){
    this.dashSvc.iscriviNewCliente(form).subscribe(res => {console.log(res); setTimeout(() => {
      this.router.navigate(["/dashboard"])
    }, 5000);}
    )
  }
}
