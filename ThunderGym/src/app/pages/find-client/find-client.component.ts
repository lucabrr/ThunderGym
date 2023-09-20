import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Icliente } from 'src/app/interfaces/Icliente';
import { IclienteWithID } from 'src/app/interfaces/IclienteWithID';
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

  @ViewChild("modalRinnova")
  modalRinnova!:ElementRef


  pageIndex:number=0
  findClienteUrl:string = `http://localhost:8080/api/dashboard/findCliente?page=${this.pageIndex}&size=10`
  serverRes!:string
  clienteSelezionato!:IclienteWithID


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
  openModal(){
    this.dashSvc.modal.open(this.modalRinnova)
  }
  rinnovaCliente(id:number, form:NgForm){
    this.dashSvc.rinnovaIngressoCliente(id,form.value).subscribe(res=> { this.serverRes ="Ingresso rinnovato"}, err=> { this.serverRes ="Errore, qualcosa è andato storto"})
  }
  selezionaCliente(cliente:IclienteWithID):void{
    this.clienteSelezionato = cliente
  }

}

