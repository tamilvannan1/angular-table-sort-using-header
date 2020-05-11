import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  userMessage: string;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {}

  //Redirect to user detail page
  goToDetails() {
    this.dataService.setInputText(this.userMessage);
    this.router.navigate(['/details']);
  }
}
