import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'bdr-devops-school';

  loggedUserName = 'visitor';

  constructor(private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    this.loggedUserName = this.keycloakService.getUsername();
  }

  logout(): void {
    this.keycloakService.logout(window.location.origin);
  }
}