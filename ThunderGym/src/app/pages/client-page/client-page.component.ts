import { Component } from '@angular/core';
import { AuthorizzationService } from 'src/app/services/authorizzation.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent {
  constructor(private authSvc:AuthorizzationService){}
}
