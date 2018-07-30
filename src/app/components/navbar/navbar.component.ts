import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  project:string = 'myapp';

  name:string = 'Ivan';
  familyName:string = 'Aksak';

  constructor() { }

  ngOnInit() {
  }

}
