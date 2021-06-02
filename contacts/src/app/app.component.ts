import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private route: ActivatedRoute, public router: Router) { }
  
  navigation = [
   {
      name: 'Contact List',
      link: '/contacts',
    },
    {
      name: 'Add Contact',
      link: '/add',
    }
  ];
  
  title = 'Contacts Application';
}
