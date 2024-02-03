import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthorizzationService } from 'src/app/services/authorizzation.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit , OnDestroy {
  isLogged!:boolean
  loginErrorMessage!:string
  isLoading:boolean = false


  constructor(private authSvc:AuthorizzationService, private router:Router){}



  ngOnInit():void{
  this.authSvc.isLogged$.subscribe(dato => { this.isLogged = dato; console.log(this.isLogged);
  })
 }

  login(form:NgForm){
    this.isLoading = true
    if(form.valid){

      this.authSvc.login(form.value).pipe(
        catchError(err => {

          this.loginErrorMessage = err.error.message;
          this.isLoading=false



          return throwError(err);
        })
        )
        .subscribe(res => {
          this.router.navigate(['/dashboard']);
        });
      } else{
        this.loginErrorMessage = "inserisci i tuoi dati"
      }
  }
  ngOnDestroy(): void {
    this.isLoading = false
  }
}

