import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Icliente } from 'src/app/interfaces/Icliente';
import { IpageableRes } from 'src/app/interfaces/IpageableRes';
import { ClienteNameDTO } from 'src/app/interfaces/clienteNameDTO';
import { DashBoardService } from 'src/app/services/dashBoard.service';

@Component({
  selector: 'app-find-client',
  templateUrl: './find-client.component.html',
  styleUrls: ['./find-client.component.scss']
})
export class FindClientComponent implements OnInit{
  constructor(private dashSvc:DashBoardService){}
  pageIndex:number=0
  findClienteUrl:string = `http://localhost:8080/api/dashboard/findCliente?page=${this.pageIndex}&size=10`

  clienteDTO:ClienteNameDTO= {
    nome:""
  }

  pageable:IpageableRes = {content: []}




  ngOnInit():void {
    this.getCliente()
  }

  getCliente(){

     this.dashSvc.getPageableCliente(this.findClienteUrl,this.clienteDTO).subscribe(res => {console.log(this.findClienteUrl);
      console.log(res); this.pageable = res}

    )
  }

  nextPage():void{
    if(this.pageable.totalPages){

      if(this.pageIndex < this.pageable.totalPages - 1){
        console.log(this.pageable.totalPages);

        this.pageIndex = this.pageIndex + 1
        this.findClienteUrl =  `http://localhost:8080/api/dashboard/findCliente?page=${this.pageIndex}&size=10`
        console.log(this.pageIndex);

        this.getCliente()

      }
    }
  }

  previusPage():void{
    if(this.pageIndex >= 1){
      this.pageIndex = this.pageIndex - 1
      this.findClienteUrl =  `http://localhost:8080/api/dashboard/findCliente?page=${this.pageIndex}&size=10`
      this.getCliente()
    }
  }

}

