import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationsService } from '../authentications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'javainuse'
  password = ''
  invalidLogin = false

 constructor(private router: Router,
  private loginservice: AuthenticationsService) {

   }

  ngOnInit(): void {
  }
}
