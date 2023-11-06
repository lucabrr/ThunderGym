import { Icliente } from './../interfaces/Icliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { ItotaleImporti } from '../interfaces/ItotaleImporti';
import { ITotaleIscritti } from '../interfaces/ITotaleIscritti';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { IpageableRes } from '../interfaces/IpageableRes';
import { ClienteNameDTO } from '../interfaces/clienteNameDTO';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientSummary } from '../interfaces/clientSummary';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {
  apiUrl:string ="https://microhub.hop.sh/api/dashboard/";


  clientsSummary:string = this.apiUrl + "clientSummary"
  totalImportiUrl:string = this.apiUrl + "importi"
  totalIscrittiUrl:string = this.apiUrl + "iscritti"
  newClienteUrl:string = this.apiUrl + "newCliente"
  modificaClienteUrl:string=this.apiUrl + "modificaClient"
  rinnovaIngressoClienteUrl:string= this.apiUrl + "rinnovaIngresso/"
  clienteInScandenzaUrl:string= this.apiUrl + "clienteInScadenza"

constructor(private http:HttpClient ,  public modal:NgbModal) { }


//



getClientsSummary(){
  return this.http.get<ClientSummary>(this.clientsSummary)
}
getAllImportiMeseCorrenteNpassato(){
  return this.http.get<ItotaleImporti>(this.totalImportiUrl)
}
getIscrittiMeseCorrenteNpassato(){
  return this.http.get<ITotaleIscritti>(this.totalIscrittiUrl)
}
iscriviNewCliente(form:NgForm){
return this.http.post(this.newClienteUrl, form.value,{responseType: "text"})
}
getPageableCliente(url:string,cliente:ClienteNameDTO){
  return this.http.post<IpageableRes>(url, cliente);
}
getPageableClienteV2(url:string){
  return this.http.get<IpageableRes>(url);
}
getClienteById(url:string){
  return this.http.get<Icliente>(url)
}
modificaCliente(cliente:Icliente){
  return this.http.post<Icliente | string>(this.modificaClienteUrl,cliente )
}
rinnovaIngressoCliente(id:number, cliente:Icliente){
  return this.http.patch<Icliente>(this.rinnovaIngressoClienteUrl+id,cliente)
}
getClienteInScadenza(){
  return this.http.post<IpageableRes>(this.clienteInScandenzaUrl, null)
}
}
