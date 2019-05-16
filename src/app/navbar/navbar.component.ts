import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/provider.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tab = 'shop';
  isLogged = false;
  username = '';

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    if (localStorage.getItem('Token') && localStorage.getItem('username')){
      this.isLogged = true;
      this.username = localStorage.getItem('username');
    }
  }
  logout() {
    this.provider.logout().then(res => {
      localStorage.clear();
      this.isLogged = false;
      this.username = '';
    });
  }
  setTab(curTab) {
    this.tab = curTab;
  }

}
